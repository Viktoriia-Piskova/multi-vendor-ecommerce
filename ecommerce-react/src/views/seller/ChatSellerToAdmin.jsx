import React from "react";
import ChatMessage from "../components/ui/ChatMessage";
import ChatMessageInput from "../components/ui/ChatMessageInput";
import ChatCurrentUser from "../components/ui/ChatCurrentUser";

const ChatSellerToAdmin = () => {
  return (
    <div className="est-container">
      <div className="est-container-violet h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div className="w-full md:pl-4 p-2">
            <div className="flex justify-between items-center">
            <ChatCurrentUser userName="The Admin" isActive={true} />
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
