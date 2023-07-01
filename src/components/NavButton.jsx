import {
  Avatar,
  Box,
  Flex,
  Menu,
  Modal,
  Text,
  createStyles,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import React, { useState } from "react";
import { BsBell, BsMenuButtonWideFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";

import { ActionToggle } from "./DarkandLightTheme";
import { IconLock, IconLogout, IconUserShare } from "@tabler/icons-react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import ChangePassword from "./ChangePassword";

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  naviconLink: {
    width: rem(35),
    height: rem(35),
    borderRadius: theme.radius.lg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },
  // "#AA8453"
  naviconLinkActive: {
    "&:hover": {
      color: "#AA8453",
    },
  },

  title: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.dark[5],
    textTransform: "capitalize",
  },
}));

const NavButton = ({ showBtn }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  const { classes, theme } = useStyles();

  return (
    <Box
      className={`fixed -top-[80px] -right-[80px] w-[250px] h-[250px]  ${
        showBtn ? "translate-y-0" : "-translate-y-[100%]"
      }
       transition-all duration-300 eas`}
    >
      <div className="w-full h-full flex justify-center items-center relative ">
        <div
          className={`absolute top-0 left-0 z-[1] bg-starColor rounded-full w-full h-full ${
            show ? "scale-100" : "scale-0"
          } transition-all duration-300 ease-in-out`}
        >
          <div
            className="w-[32px] h-[32px] bg-black rounded-full bg-opacity-20 absolute top-24 left-3 z-10 
          "
          >
            <ActionToggle />
          </div>

          <button className="w-[32px] h-[32px] bg-black text-white  rounded-full bg-opacity-20 absolute top-36 left-4 z-10 flex justify-center items-center">
            <BsBell size={16} />
          </button>

          <button className="w-[32px] h-[32px] bg-black text-white rounded-full bg-opacity-20 absolute top-[186px] left-12 z-10 flex justify-center items-center">
            <BsMenuButtonWideFill size={16} />
          </button>

          <button className="w-[34px] h-[34px] bg-black text-white rounded-full bg-opacity-20 absolute top-[210px] left-24 z-10 p-1 flex justify-center items-center">
            <div className="w-full h-full ">
              <Menu shadow="xl" width={180} withArrow position="bottom-end">
                <Menu.Target className="cursor-pointer">
                  <Avatar
                    radius="lg"
                    size="sm"
                    color="dark"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                  />
                </Menu.Target>

                <Menu.Dropdown
                
                mt={10}
                  style={{
                    backgroundColor:
                      colorScheme === "dark" ? "#282828" : "white",
                  }}
                >
                  <Menu.Item>
                    <Flex>
                      <Avatar
                        radius="lg"
                        size="sm"
                        color="dark"
                        src={
                          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                        }
                      />
                      <Text pl={15}> Profile</Text>
                    </Flex>
                  </Menu.Item>
                  <Menu.Divider />

                  <Menu.Item onClick={open} icon={<IconLock size={14} />}>
                    Change Password
                  </Menu.Item>

                  <Menu.Item icon={<IconUserShare size={14} />}>
                    Manage Account
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => {
                      Cookies.remove("isLogin");
                      navigate("/login");
                    }}
                    color="red"
                    icon={<IconLogout size={14} />}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </button>
        </div>

        <button
          onClick={() => setShow(!show)}
          className={`w-[50px] h-[50px] z-10 rounded-full shadow-lg ${
            show ? "bg-[rgb(170,132,83)]" : "bg-starColor"
          } flex justify-center items-center`}
        >
          {!show ? (
            <IoMenu className="text-xl text-white " />
          ) : (
            <HiXMark className="text-xl text-white " />
          )}
        </button>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="Change Password"
        centered
        classNames={{
          title: "text-2xl",
          content: `${
            theme.colorScheme === "dark" ? "bg-[#1B1B1B]" : "bg-[#F8F5F0]"
          }`,
          header: `${
            theme.colorScheme === "dark" ? "bg-[#1B1B1B]" : "bg-[#F8F5F0]"
          } border-b border-gray-600 border-opacity-20`,
        }}
      >
        <ChangePassword close={close} />
      </Modal>
    </Box>
  );
};

export default NavButton;
