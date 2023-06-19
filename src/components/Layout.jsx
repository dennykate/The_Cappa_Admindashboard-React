import React, { useState } from "react";

import { Box, Flex, Stack } from "@mantine/core";

import { MantineSidebar } from "./Sidebar";
import { HeaderMegaMenu } from "./Navbar";

const Layout = ({ children }) => {
  const [menuSelect, setmenuSelect] = useState("");
  const [sideBarWidth, setSideBarWidth] = useState(300);
  const [navbarSide, setnavbarSide] = useState("1225px");

  const handleMenuChange = (newMenu) => {
    setmenuSelect(newMenu);
  };

  const handleSideBarWidth = (isMainLink = false) => {
    if (isMainLink) {
      setSideBarWidth(300);
      setnavbarSide("1450px");
    } else {
      sideBarWidth == 300 ? setSideBarWidth(70) : setSideBarWidth(300);
      navbarSide == "1225px"
        ? setnavbarSide("1450px")
        : setnavbarSide("1225px");
    }
  };

  // burger toggle
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (isMainLink = false) => {
    if (isMainLink) {
      if (isOpen) {
        setIsOpen(false);
        handleSideBarWidth(isMainLink);
      }
    } else {
      setIsOpen(!isOpen);
      handleSideBarWidth();
    }
  };
  const layoutStyles = {
    height: "100vh",
    overflow: "hidden",
  };

  return (
    <Flex direction="row" gap={0} style={layoutStyles}>
      <MantineSidebar
        onPropChange={handleMenuChange}
        sideBarWidth={sideBarWidth}
        handleToggle={handleToggle}
      ></MantineSidebar>
      <Flex sx={{ width: "100%", "overflow-y": "scroll" }} direction="column">
        <HeaderMegaMenu
          menuSelect={menuSelect}
          handleToggle={handleToggle}
          navbarSide={navbarSide}
        ></HeaderMegaMenu>
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
