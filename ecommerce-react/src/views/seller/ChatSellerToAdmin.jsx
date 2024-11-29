import React from "react";
import ChatMessage from "../components/ui/ChatMessage";
import ChatMessageInput from "../components/ui/ChatMessageInput";

const ChatSellerToAdmin = () => {
  return (
    <div className="est-container">
      <div className="est-container-violet h-[calc(100vh-140px)]">
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
                <ChatMessage text="Inbox message"/>
                <ChatMessage text="Response message" isResponse={true} />
              </div>
            </div>
            <form className="flex gap-3">
             <ChatMessageInput />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSellerToAdmin;
