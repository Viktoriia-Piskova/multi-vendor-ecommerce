import React from "react";

const StatsCard = ({ children, backgroundColor, iconColor, title, text }) => {
  return (
    <div
      className={`flex justify-between items-center p-5 bg-[${
        backgroundColor ? backgroundColor : "#e9feea"
      }] rounded-md gap-3`}
    >
      <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
        <h2 className="text-3xl font-bold">{title || "0"}</h2>
        <p className="text-md 1font-medium">
          {text || "Please, provide the description"}
        </p>
      </div>
      {children && (
        <div
          className={`w-[40px] h-[47px] min-w-[40px] rounded-full bg-[${
            iconColor ? iconColor : "#038000"
          }] flex justify-center items-center text-xl`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default StatsCard;
