import React from "react";

const LabeledText = ({ label, children }) => {
  return (
    <div className="flex gap-2">
      <p className="font-semibold">{label}: </p>
      {children}
    </div>
  );
};

export default LabeledText;
