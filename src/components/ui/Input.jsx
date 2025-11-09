const Input = ({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
  optional = false,
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-neutral-700"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
        {!required && optional && (
          <span className="ml-1 text-xs text-neutral-500">(Optional)</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
        className="w-full rounded-lg border border-neutral-300 px-4 py-3 transition-colors focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
      />
    </div>
  );
};

export default Input;
