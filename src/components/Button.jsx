import React from "react";

function Button({ onClick, children, className, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
