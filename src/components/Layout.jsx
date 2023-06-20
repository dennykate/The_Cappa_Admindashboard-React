import React, { useState } from "react";

import { Box, Flex, Stack, useMantineColorScheme } from "@mantine/core";

import { MantineSidebar } from "./Sidebar";
import { HeaderMegaMenu } from "./Navbar";

const Layout = ({ children }) => {
  const { colorScheme } = useMantineColorScheme();
  // burger toggle
  const [isOpen, setIsOpen] = useState(true);

  const [menuSelect, setmenuSelect] = useState("");

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
    height: "100vh",
    overflow: "hidden",
  };

  return (
    <Flex direction="row" gap={0} style={layoutStyles}>
      <MantineSidebar
        onPropChange={handleMenuChange}
        sideBarWidth={getSideBarWidth}
        handleIsOpen={handleIsOpenSideBar}
        isOpen={isOpen}
      ></MantineSidebar>
      <Box
        sx={{
          width: "100%",
          "overflow-y": "auto",
          minHeight: "100vh",
          backgroundColor: colorScheme === "dark" ? "#222222" : "#ffffff",
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
    </Flex>
  );
};

export default Layout;
