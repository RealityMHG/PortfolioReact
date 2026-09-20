interface IconProps {
  name?: "arrow" | "down" | "download" | "copy" | "check" | "plus";
  className?: string;
}

const paths = {
  arrow: "M5 19 19 5M5 5h14v14",
  down: "M12 4v16M5 13l7 7 7-7",
  download: "M12 3v12M7 10l5 5 5-5M4 17v4h16v-4",
  copy: "M9 9h11v11H9zM15 9V4H4v11h5",
  check: "m5 12 4 4L19 6",
  plus: "M12 5v14M5 12h14",
};

export default function Icon({ name = "arrow", className = "" }: IconProps) {
  return (
    <svg
      className={`icon ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
