import { Box } from "@mantine/core";
import React, { useState } from "react";
import { BsBell, BsMenuButtonWideFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";

import { ActionToggle } from "./DarkandLightTheme";

const NavButton = ({ showBtn }) => {
  const [show, setShow] = useState(false);

  return (
    <Box
      className={`fixed -top-[80px] -right-[80px] w-[250px] h-[250px]  ${
        showBtn ? "translate-y-0" : "-translate-y-[100%]"
      }
       transition-all duration-300 eas`}
    >
      <div className="w-full h-full flex justify-center items-center relative ">
        <div
          className={`absolute top-0 left-0 -z-[1] bg-primary rounded-full w-full h-full ${
            show ? "scale-100" : "scale-0"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="w-[32px] h-[32px] bg-black rounded-full bg-opacity-20 absolute top-24 left-3 z-10 ">
            <ActionToggle />
          </div>

          <button className="w-[32px] h-[32px] bg-black text-white  rounded-full bg-opacity-20 absolute top-36 left-4 z-10 flex justify-center items-center">
            <BsBell size={16} />
          </button>

          <button className="w-[32px] h-[32px] bg-black text-white rounded-full bg-opacity-20 absolute top-[186px] left-12 z-10 flex justify-center items-center">
            <BsMenuButtonWideFill size={16} />
          </button>

          <button className="w-[32px] h-[32px] bg-black text-white rounded-full bg-opacity-20 absolute top-[210px] left-24 z-10 p-1 flex justify-center items-center">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
                alt="svg"
                className="w-full"
              />
            </div>
          </button>
        </div>

        <button
          onClick={() => setShow(!show)}
          className="w-[50px] h-[50px] rounded-full shadow-lg bg-starColor flex justify-center items-center"
        >
          {!show ? (
            <IoMenu className="text-xl text-white " />
          ) : (
            <HiXMark className="text-xl text-white " />
          )}
        </button>
      </div>
    </Box>
  );
};

export default NavButton;
