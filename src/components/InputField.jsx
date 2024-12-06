import React from "react";

function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  ...props
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        {...props}
      />
    </div>
  );
}

export default InputField;
