import React from "react";

const ChatMessageInput = () => {
  return (
    <>
      <input
        type="text"
        className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] rounded-md outline-none bg-transparent text-est-light-grey focus:border-blue-500 "
        placeholder="Input your message"
      />
      <button className="shadow-lg bg-est-blue-bright hover:shadow-cyan-500/50 font-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
        Send
      </button>
    </>
  );
};

export default ChatMessageInput;
