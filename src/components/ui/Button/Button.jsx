import "./Button.scss";

const Button = ({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
}) => {
  if (href) {
    return (
      <a href={href} className={`btn btn--${variant}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`btn btn--${variant}`}>
      {children}
    </button>
  );
};

export default Button;