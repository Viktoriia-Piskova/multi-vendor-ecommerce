import React from "react";

const RedButton = ({ handleClick, additionalClass, children }) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-red-500 shadow-lg hover:shadow-red-500/50 px-4 py-2 cursor-pointer text-white rounded-sm ${additionalClass}`}
    >
      {children}
    </button>
  );
};

export default RedButton;
