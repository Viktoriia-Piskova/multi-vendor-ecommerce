import React from "react";

const Select = ({ value, onChange, options, name, id, additionalClasses }) => {
  return (
    <select
      className={`px-4 py-2 hover:cursor-pointer focus:border-indigo-500 transition-all outline-none  border border-slate-700 rounded-md text-est-light-grey ${additionalClasses || 'bg-est-violet-bright'} `}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.text}</option>
      ))}
    </select>
  );
};

export default Select;
