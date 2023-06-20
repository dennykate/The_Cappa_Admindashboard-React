import React from "react";
import Layout from "../components/Layout";
import TableComponent from "../components/TableComponent";
import { Box, Flex, Paper, useMantineColorScheme } from "@mantine/core";

const AllBooking = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Layout>
      <Flex className={`justify-center flex-col  p-14 `}>
        <TableComponent dark={dark} />
      </Flex>
    </Layout>
  );
};

export default AllBooking;
