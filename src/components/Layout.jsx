import React from "react";

import { Box, Flex, Stack } from "@mantine/core";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Flex direction="row" gap={0}>
      <Sidebar />
      <Flex sx={{ width: "100%" }} direction="column">
        <Navbar />

        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
