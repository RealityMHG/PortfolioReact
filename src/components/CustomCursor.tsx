import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const interactiveSelector = "a, button, summary";
const nativeSelector = "input, textarea, select, [contenteditable='true']";
const variantIntervalMs = 600;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const signature = signatureRef.current;
    if (!dot || !signature) return;

    const pointerCapability = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const root = document.documentElement;
    let frame = 0;
    let visible = false;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let variantTimer: ReturnType<typeof window.setInterval> | undefined;
    let style = 0;
    let previousTime = 0;

    const hide = () => {
      visible = false;
      root.classList.remove("cursor-active");
      dot.classList.remove("is-visible", "is-pressed", "is-interactive");
      signature.classList.remove("is-visible", "is-pressed");
      window.cancelAnimationFrame(frame);
      window.clearInterval(variantTimer);
      variantTimer = undefined;
      frame = 0;
    };

    const render = (time: number) => {
      const elapsed = Math.min(time - previousTime, 64);
      previousTime = time;
      const easing = 1 - Math.exp(-elapsed / 65);
      x += (targetX - x) * easing;
      y += (targetY - y) * easing;
      // Keep the signature inside the viewport, including near its top edge.
      const offsetY = y < 60 ? 34 : -34;
      const safeX = Math.min(window.innerWidth - 28, Math.max(28, x));
      signature.style.transform = `translate3d(${safeX}px, ${y + offsetY}px, 0)`;
      frame =
        Math.abs(targetX - x) + Math.abs(targetY - y) > 0.1
          ? window.requestAnimationFrame(render)
          : 0;
    };

    const move = (event: PointerEvent) => {
      if (
        !pointerCapability.matches ||
        event.pointerType !== "mouse" ||
        (event.target instanceof Element &&
          event.target.closest(nativeSelector))
      ) {
        hide();
        return;
      }
      targetX = event.clientX;
      targetY = event.clientY;
      if (!visible) {
        x = targetX;
        y = targetY;
        visible = true;
        root.classList.add("cursor-active");
        dot.classList.add("is-visible");
        signature.classList.add("is-visible");
        variantTimer = window.setInterval(() => {
          style = (style + 1) % 3;
          signature.dataset.style = String(style);
        }, variantIntervalMs);
      }
      dot.classList.toggle(
        "is-interactive",
        event.target instanceof Element &&
          Boolean(event.target.closest(interactiveSelector)),
      );
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      if (!frame) {
        previousTime = performance.now();
        frame = window.requestAnimationFrame(render);
      }
    };
    const press = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return hide();
      if (!visible) return;
      dot.classList.add("is-pressed");
      signature.classList.add("is-pressed");
    };
    const release = () => {
      dot.classList.remove("is-pressed");
      signature.classList.remove("is-pressed");
    };
    const scroll = () => {
      if (!visible) return;
      // Scrolling changes the hovered element even when the mouse stays still.
      const target = document.elementFromPoint(targetX, targetY);
      if (target?.closest(nativeSelector)) return hide();
      dot.classList.toggle(
        "is-interactive",
        Boolean(target?.closest(interactiveSelector)),
      );
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", hide);
    window.addEventListener("scroll", scroll, { passive: true, capture: true });
    root.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", hide);
    pointerCapability.addEventListener("change", hide);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", hide);
      window.removeEventListener("scroll", scroll, true);
      root.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", hide);
      pointerCapability.removeEventListener("change", hide);
    };
  }, []);

  return (
    <>
      <div className="cursor-signature" ref={signatureRef} aria-hidden="true">
        <span>rr</span>
      </div>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true">
        <span />
      </div>
    </>
  );
}
