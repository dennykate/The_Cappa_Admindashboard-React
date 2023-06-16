import { Navbar } from "@mantine/core";
import React from "react";

const Sidebar = () => {
  return (
    <Navbar
      sx={{
        background: "green",
        height: "100vh",
        width: 300,
        position: "sticky",
        top: 0,
      }}
    ></Navbar>
  );
};

export default Sidebar;
