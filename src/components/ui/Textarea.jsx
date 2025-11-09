import React from "react";

const Textarea = ({
  label,
  id,
  placeholder,
  required = false,
  optional = false,
  rows = 4,
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
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        required={required}
        {...props}
        className="w-full resize-none rounded-lg border border-neutral-300 px-4 py-3 transition-colors focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
      />
    </div>
  );
};

export default Textarea;
