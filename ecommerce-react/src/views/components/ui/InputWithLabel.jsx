import React from "react";

const InputWithLabel = ({
  id,
  type = "text",
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  additionalInputClass = "",
  additionalLabelClass = "",
  additionalWrapperClass = "",
}) => {
  return (
    <div
      className={`flex flex-col w-full gap-1 mb-3 ${additionalWrapperClass}`}
    >
      {label && <label
        htmlFor={name}
        className={`mb-2 text-est-light-grey ${additionalLabelClass}`}
      >
        {label}
      </label>}
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          cols="10"
          rows="4"
          className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright ${additionalInputClass}`}
        />
      )}
    </div>
  );
};

export default InputWithLabel;
