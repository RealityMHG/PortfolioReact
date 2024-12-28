interface ButtonProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
  variant?: "primary" | "outline"; // Variants for styling
}

const Button = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  variant = "primary",
}: ButtonProps) => {
  const baseClass = `btn btn-${variant} ${classes}`;

  if (href) {
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
