import React from "react";
import ChatBoxModalAtom from "../../hooks/modal-atom/chat-box-modal-atom";
const ChatBox = () => {
  const { open, handleCLose } = ChatBoxModalAtom();
  return (
    <div>
      {open && (
        <div className="bg-[#fff] shadow-lg shadow-[#dbdbdb] h-96	w-[300px]">
          <div className="flex items-center justify-between p-2 bg-[#f5f5f5] shadow-lg shadow-[#f7f6f6]">
            <div className="flex items-center gap-3 ">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div>
                <h1 className="text-base font-semibold">Test</h1>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl text-[#05f] cursor-pointer"
                onClick={handleCLose}
              >
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </div>
          </div>
          <div className="h-[275px] p-2 mt-1">Message</div>

          <div className="flex items-center p-2 ">
            <div className="w-full">
              <div>
                <input
                  type="text"
                  className="font-semibold font-fredoka w-full py-1 p-2  bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
                  placeholder="Aa"
                />
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl text-[#05f] cursor-pointer"
              >
                <path
                  fill="currentColor"
                  d="M4 18.5v-5.154L9.846 12L4 10.654V5.5L19.423 12z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
