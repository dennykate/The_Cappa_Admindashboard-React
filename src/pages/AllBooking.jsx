import React from "react";
import Layout from "../components/Layout";
import TableComponent from "../components/TableComponent";
import { Flex, Paper, useMantineColorScheme } from "@mantine/core";

const AllBooking = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Layout>
      <Flex
        className={`justify-center  py-14 ${
          dark ? "bg-[#222222]" : "bg-[#F8F5F0]"
        }`}
      >
        <Paper
          bg={""}
          sx={{ width: "90%" }}
          radius="lg"
          className={`table-layout shadow-2xl overflow-hidden ${
            dark ? "bg-[#1B1B1B]" : "bg-[#ffffff]"
          }`}
        >
          <TableComponent dark={dark} />
        </Paper>
      </Flex>
    </Layout>
  );
};

export default AllBooking;
