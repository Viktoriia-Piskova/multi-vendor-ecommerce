import React, { useState } from "react";

const ChatSellerToAdmin = () => {

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-est-violet-bright rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div className="w-full md:pl-4 p-2">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="relative">
                  <img
                    className="h-[45px] border-green-500 border-2 max-w-[45px] rounded-full"
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                  />
                  <div className="rounded-full w-[10px] h-[10px] bg-green-500 absolute right-0 bottom-0"></div>
                </div>
                <h2 className="text-base text-white font-semibold">Support</h2>
              </div>
            </div>
            <div className="py-4">
              <div className="bg-est-gray-meduim h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="h-[38px] border-white border-2 max-w-[38px] rounded-full"
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>Question inbox message</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-red-500 shadow-lg shadow-red-500/50 text-white py-1 px-2 rounded-sm">
                      <span>Response message</span>
                    </div>
                    <div>
                      <img
                        className="h-[38px] border-white border-2 max-w-[38px] rounded-full"
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex gap-3">
              <input
                type="text"
                className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] rounded-md outline-none bg-transparent text-est-light-grey focus:border-blue-500 "
                placeholder="Input your message"
              />
              <button className="shadow-lg bg-est-blue-bright hover:shadow-cyan-500/50 font-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSellerToAdmin;