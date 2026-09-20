import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const copyEmail = async () => {
    clearTimeout(timeoutRef.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    timeoutRef.current = setTimeout(() => setCopyStatus("idle"), 5000);
  };

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-heading"
      tabIndex={-1}
    >
      <div className="container section-space">
        <div className="contact-top">
          <p className="eyebrow">04 / Let’s talk</p>
          <span className="contact-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="contact-main" data-reveal>
          <h2 id="contact-heading">
            Good things start
            <br />
            <em>with a conversation.</em>
          </h2>
          <div className="contact-copy">
            <p>
              Building a business application or improving an existing product?
              Tell me what you need, where things stand and your expected
              timeline.
            </p>
            <a className="button button-light" href={`mailto:${profile.email}`}>
              Discuss your project <Icon />
            </a>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="email-block">
            <span className="eyebrow">Drop me a line</span>
            <div className="email-row">
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button
                className="copy-button"
                type="button"
                onClick={copyEmail}
                aria-label={
                  copyStatus === "copied"
                    ? "Email copied"
                    : "Copy email address"
                }
              >
                <Icon name={copyStatus === "copied" ? "check" : "copy"} />
              </button>
            </div>
            <p className="copy-status" role="status">
              {copyStatus === "copied"
                ? "Email address copied."
                : copyStatus === "failed"
                  ? "Couldn’t copy. You can select the email address or open it in your mail app."
                  : ""}
            </p>
          </div>
          <div className="contact-socials">
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Icon />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Icon />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
