import { Box, Flex, Text } from "@mantine/core";
import React from "react";

const Footer = ({ dark }) => {
  return (
    <Flex w="100%" py={20} px={10} justify="center" align="center">
      <Text
        className={`text-sm font-normal text-center  ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Copyright © Designed & Developed by{" "}
        <span className="text-primary cursor-pointer hover:underline">
          Team B{" "}
        </span>
        2023
      </Text>
    </Flex>
  );
};

export default Footer;
