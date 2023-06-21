import React from "react";
import { TbMessageCircle2Filled } from "react-icons/tb";

const MessageBtn = () => {
  return (
    <div
      className="w-[50px] h-[50px] bg-starColor rounded-full fixed bottom-5 right-3
  flex justify-center items-center"
    >
      <TbMessageCircle2Filled size={24} color="white" />
    </div>
  );
};

export default MessageBtn;
