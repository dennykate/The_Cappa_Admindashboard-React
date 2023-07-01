import React, { useEffect, useState } from "react";

import {
  Box,
  Flex,
  MediaQuery,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";

import { MantineSidebar } from "./Sidebar";
import { HeaderMegaMenu } from "./Navbar";
import { Navigate } from "react-router";
import { useLocalStorage } from "@mantine/hooks";
import Cookies from "js-cookie";
import { useWindowScroll } from "@mantine/hooks";
import NavButton from "./NavButton";
import MessageBtn from "./MessageBtn";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const isLogin = Cookies.get("isLogin");

  const [scroll, scrollTo] = useWindowScroll();
  const [showBtn, setShowBtn] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  // burger toggle
  const [isOpen, setIsOpen] = useState(true);

  const [menuSelect, setmenuSelect] = useState("");
  const [profile, setProfile] = useState(
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
  );

  useEffect(() => {
    if (scroll.y > 50) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, [scroll]);

  const handleMenuChange = (newMenu) => {
    setmenuSelect(newMenu);
  };

  const getSideBarWidth = () => (isOpen ? "100%" : "-4%");
  const getNavBarWidth = () => (isOpen ? "100%" : "150%");

  const handleIsOpenSideBar = () => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
  };
  const handleIsOpenNavBar = (e) => {
    e.stopPropagation(0);
    setIsOpen(!isOpen);
  };

  const layoutStyles = {
    minHeight: "100vh",
  };

  if (!isLogin) return <Navigate to={"/login"} />;
  else
    return (
      <Flex
        direction="row"
        justify="center"
        align="start"
        gap={0}
        style={layoutStyles}
      >
        <Box
          className={`lg:sticky fixed z-[100] top-0 left-0 overflow-x-hidden lg:overflow-x-visible   ${
            isOpen
              ? " lg:w-[40vw] xl:w-[25vw] md:w-[40vw]  sm:w-[45vw] w-[72vw]"
              : "lg:w-[5.2vw] w-0 xl:w-[4.2vw]"
          }`}
          style={{
            transition: "width 0.5s",
          }}
        >
          <MantineSidebar
            onPropChange={handleMenuChange}
            sideBarWidth={getSideBarWidth}
            handleIsOpen={handleIsOpenSideBar}
            isOpen={isOpen}
          ></MantineSidebar>
        </Box>

        <Box
          onClick={() => setIsOpen(false)}
          sx={{
            width: "100%",
            minHeight: "100vh",
            backgroundColor: colorScheme === "dark" ? "#222222" : "#F8F5F0",
          }}
        >
          <HeaderMegaMenu
            profile={profile}
            menuSelect={menuSelect}
            navbarSide={getNavBarWidth}
            handleIsOpen={handleIsOpenNavBar}
            isOpen={isOpen}
          ></HeaderMegaMenu>
          {children}
          {/* <div className="w-full h-[4000px] bg-red-400"></div> */}
          <Footer dark={dark} />
        </Box>

        <NavButton showBtn={showBtn} />
        <MessageBtn />
      </Flex>
    );
};

export default Layout;
