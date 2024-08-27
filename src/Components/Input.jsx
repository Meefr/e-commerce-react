import React, { useState } from "react";


function CustomInput({ label, type, name, value, onChange, className, error }) {
  const [isErrorShow,setIsErrorShow] = useState(false);
  return (
    <div className="col-span-12 sm:col-span-12">
      {error && isErrorShow && (
        <div
          class="p-4 my-4  text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          {error}
        </div>
      )}
      <label
        htmlFor="LastName"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={() => setIsErrorShow(true)}
        onFocus={() => setIsErrorShow(false)}
        className="p-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
    </div>
  );
}

export default CustomInput;
