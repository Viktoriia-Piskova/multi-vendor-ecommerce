import React from "react";

const ChatUserPreview = ({ userName, userImageUrl, isSelected, isActive }) => {
  return (
    <div
      className={`h-[60px] flex justify-start gap-2 items-center text-white p-2 rounded-md cursor-pointer ${
        isSelected ? "bg-est-violet-medium" : ""
      } `}
    >
      <div className="relative">
        <img
          className="h-[38px] border-white border-2 max-w-[38px] rounded-full"
          src={`${userImageUrl ? 'userImageUrl' : 'http://localhost:3000/images/admin.jpg'}`}
          alt="User profile picture"
        />
        <div className={`rounded-full w-[10px] h-[10px] ${isActive ? 'bg-green-500' : 'bg-gray-600'} absolute right-0 bottom-0`}></div>
      </div>
      <div className="flex justify-center items-start flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-base font-semibold">{userName || 'User Name'}</h2>
        </div>
      </div>
    </div>
  );
};

export default ChatUserPreview;
