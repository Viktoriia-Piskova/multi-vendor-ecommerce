import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ChatMessage from "../components/ui/ChatMessage";
import ChatMessageInput from "../components/ui/ChatMessageInput";

const ChatSellerToCustomer = () => {
  const [show, setShow] = useState(true);
  const sellerId = 2;

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
                <h2>Customers</h2>
                <span
                  className="block cursor-pointer md:hidden text-white"
                  onClick={() => setShow(false)}
                >
                  <IoMdClose />
                </span>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white p-2 rounded-md cursor-pointer bg-est-violet-medium`}
              >
                <div className="relative">
                  <img
                    className="h-[38px] border-white border-2 max-w-[38px] rounded-full"
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                  />
                  <div className="rounded-full w-[10px] h-[10px] bg-green-500 absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Seller Name</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white p-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="h-[38px] border-white border-2 max-w-[38px] rounded-full"
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                  />
                  <div className="rounded-full w-[10px] h-[10px] bg-green-500 absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Another Seller</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[calc(100%-200px)] md:pl-4 p-2">
            <div className="flex justify-between items-center">
              {sellerId && (
                <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      className="h-[45px] border-green-500 border-2 max-w-[45px] rounded-full"
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                    />
                    <div className="rounded-full w-[10px] h-[10px] bg-green-500 absolute right-0 bottom-0"></div>
                  </div>
                  <h2 className="text-base text-white font-semibold">
                    Seller Name
                  </h2>
                </div>
              )}
              <div
                className="w-[35px] h-[35px] flex md:hidden rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white"
                onClick={() => setShow(!show)}
              >
                <span>
                  <FaList />
                </span>
              </div>
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

export default ChatSellerToCustomer;
