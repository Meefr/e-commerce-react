import React from 'react'

function Input({ label , type }) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="LastName"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id="LastName"
        name="last_name"
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
    </div>
  );
}

export default Input