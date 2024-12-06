import React from "react";

function AuthForm({ fields, onChange, onSubmit, buttonText }) {
  return (
    <form onSubmit={onSubmit}>
      {fields.map((field, index) => (
        <div className="mb-4" key={index}>
          <label className="block text-gray-700">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
