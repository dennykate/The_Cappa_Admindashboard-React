import React from "react";
import Layout from "../components/Layout";
import { Box, Flex, useMantineColorScheme } from "@mantine/core";

const AddRoom = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Layout>
      <div
        className={`py-10 sm:px-5 px-1   ${
          dark ? "bg-[#1B1B1B] text-gray-300" : "bg-white text-black"
        }`}
      >
        <Flex justify="space-between">
          <Flex className="w-[60%] h-[20px] bg-red-300"></Flex>
          <Box className="w-[38%] h-[20px] bg-red-300"></Box>
        </Flex>
      </div>
    </Layout>
  );
};

export default AddRoom;
