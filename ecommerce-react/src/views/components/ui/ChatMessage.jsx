import React from "react";

const ChatMessage = ({ text, author, isResponse }) => {
  return (
    <div
      className={`w-full flex ${
        !isResponse ? "justify-start" : "justify-end"
      } items-center`}
    >
      <div
        className={`flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] ${
          isResponse ? "flex-row-reverse" : ""
        }`}
      >
        <div>
          {author ? (
            <img
              className="h-[38px] border-white border-2 max-w-[38px] rounded-full"
              src={`${author.profileImg.url}`}
              alt={`${author.profileImg.alt}`}
            />
          ) : (
            <img
              className="h-[38px] border-white border-2 max-w-[38px] rounded-full"
              src="http://localhost:3000/images/admin.jpg"
              alt="Profile photo"
            />
          )}
        </div>
        <div
          className={`flex justify-center items-start flex-col w-full ${
            !isResponse
              ? "bg-blue-500  shadow-blue-500/50"
              : " bg-red-500  shadow-red-500/50"
          } text-white shadow-lg py-1 px-2 rounded-sm`}
        >
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
