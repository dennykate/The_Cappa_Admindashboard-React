import React, { useState } from "react";

import { Box, Flex, Stack } from "@mantine/core";

import { MantineSidebar } from "./Sidebar";
import { HeaderMegaMenu } from "./Navbar";

const Layout = ({ children }) => {
  const [menuSelect, setmenuSelect] = useState("");
  const [sideBarWidth, setSideBarWidth] = useState(300);

  const handleMenuChange = (newMenu) => {
    setmenuSelect(newMenu);
  };

  const handleSideBarWidth = () => {
    sideBarWidth == 300 ? setSideBarWidth(50) : setSideBarWidth(300);
  };

  return (
    <Flex direction="row" gap={0}>
      <MantineSidebar
        onPropChange={handleMenuChange}
        sideBarWidth={sideBarWidth}
      ></MantineSidebar>
      <Flex sx={{ width: "100%" }} direction="column">
        <HeaderMegaMenu
          menuSelect={menuSelect}
          handleSideBarWidth={handleSideBarWidth}
        ></HeaderMegaMenu>
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
