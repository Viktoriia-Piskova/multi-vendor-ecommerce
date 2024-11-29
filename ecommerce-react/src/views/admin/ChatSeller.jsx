import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ChatMessage from "../components/ui/ChatMessage";
import ChatMessageInput from "../components/ui/ChatMessageInput";
import ChatUserPreview from "../components/ui/ChatUserPreview";
import ChatCurrentUser from "../components/ui/ChatCurrentUser";
import BurgerMenuButton from "../components/ui/BurgerMenuButton";

const ChatSeller = () => {
  const [show, setShow] = useState(true);
  const sellerId = 1;

  return (
    <div className="est-container">
      <div className="est-container-violet h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[280px] h-full absolute z-10 ${
              show ? "-left-[16px]" : "-left-[336px]"
            } md:left-0 md:relative transition-all mr-2`}
          >
            <div className="w-full h-[calc(100vh-177px)] bg-est-blue-light md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                <h2>Sellers</h2>
                <span
                  className="block cursor-pointer md:hidden text-white"
                  onClick={() => setShow(false)}
                >
                  <IoMdClose />
                </span>
              </div>
              <ChatUserPreview
                isActive={true}
                isSelected={true}
                userName={"Top seller"}
              />
              <ChatUserPreview userName="Another Seller" />
            </div>
          </div>
          <div className="w-full md:w-[calc(100%-200px)] md:pl-4 p-2">
            <div className="flex justify-between items-center">
              {sellerId && (
                <ChatCurrentUser userName="Top seller" isActive={true} />
              )}
              <BurgerMenuButton show={show} setShow={setShow} />
            </div>
            <div className="py-4">
              <div className="bg-est-gray-meduim h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <ChatMessage text="Inbox message" />
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

export default ChatSeller;
