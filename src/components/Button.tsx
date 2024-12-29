interface ButtonProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
  download?: string;
  variant?: "primary" | "outline"; // Variants for styling
}

const Button = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  download,
  variant = "primary",
}: ButtonProps) => {
  const baseClass = `btn btn-${variant} ${classes}`;

  if (href && !download) {
    return (
      <a href={href} target={target} className={baseClass}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else if (download) {
    return (
      <a href={href} target={target} download className={baseClass}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={baseClass}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

export default Button;
