import React from 'react';

const ChatCurrentUser = ({userName, userImageUrl, isActive}) => {
    return (
        <div className="flex justify-start items-center gap-3">
        <div className="relative">
          <img
            className="h-[45px] border-green-500 border-2 max-w-[45px] rounded-full"
            src={`${userImageUrl ? 'userImageUrl' : 'http://localhost:3000/images/admin.jpg'}`}
            alt="User profile picture"
          />
          <div className={`rounded-full w-[10px] h-[10px] ${isActive ? 'bg-green-500' : 'bg-gray-600'} absolute right-0 bottom-0`}></div>
        </div>
        <h2 className="text-base text-white font-semibold">
          {userName || "User name"}
        </h2>
      </div>
    );
};

export default ChatCurrentUser;