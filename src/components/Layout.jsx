import React, { useEffect, useState } from "react";

import { Box, Flex, Stack, useMantineColorScheme } from "@mantine/core";

import { MantineSidebar } from "./Sidebar";
import { HeaderMegaMenu } from "./Navbar";
import { Navigate } from "react-router";
import { useLocalStorage } from "@mantine/hooks";
import Cookies from "js-cookie";
import { useWindowScroll } from "@mantine/hooks";
import NavButton from "./NavButton";
import MessageBtn from "./MessageBtn";

const Layout = ({ children }) => {
  const isLogin = Cookies.get("isLogin");

  const [scroll, scrollTo] = useWindowScroll();
  const [showBtn, setShowBtn] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  // burger toggle
  const [isOpen, setIsOpen] = useState(true);

  const [menuSelect, setmenuSelect] = useState("");

  useEffect(() => {
    console.log(scroll);
    if (scroll.y > 50) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, [scroll]);

  const handleMenuChange = (newMenu) => {
    setmenuSelect(newMenu);
  };

  const getSideBarWidth = () => (isOpen ? 300 : 70);
  const getNavBarWidth = () => (isOpen ? "1225px" : "1450px");

  const handleIsOpenSideBar = () => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
  };
  const handleIsOpenNavBar = () => {
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
      <Box className=" sticky top-0">
        <MantineSidebar
          onPropChange={handleMenuChange}
          sideBarWidth={getSideBarWidth}
          handleIsOpen={handleIsOpenSideBar}
          isOpen={isOpen}
        ></MantineSidebar>
      </Box>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: colorScheme === "dark" ? "#222222" : "#F8F5F0",
        }}
      >
        <HeaderMegaMenu
          menuSelect={menuSelect}
          navbarSide={getNavBarWidth}
          handleIsOpen={handleIsOpenNavBar}
          isOpen={isOpen}
        ></HeaderMegaMenu>
        {children}
      </Box>

      <NavButton showBtn={showBtn} />
      <MessageBtn />
    </Flex>
  );
};

export default Layout;
