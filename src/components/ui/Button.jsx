const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses = `
    group h-8 cursor-pointer rounded-lg px-3 text-sm leading-8 
    font-semibold transition-colors select-none 
    disabled:cursor-not-allowed disabled:opacity-50
    ${className}
  `.trim();

  const variants = {
    primary: `
      bg-white text-zinc-950 
      shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] 
      hover:bg-zinc-50 
      active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]
    `,
    danger: `
      bg-white text-red-600
      shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] 
      hover:bg-zinc-50 hover:text-red-700
      active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]
    `,
  };

  const buttonClasses = `${baseClasses} ${variants[variant]}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      <span className="block group-active:transform-[translate3d(0,1px,0)]">
        {children}
      </span>
    </button>
  );
};

export default Button;
