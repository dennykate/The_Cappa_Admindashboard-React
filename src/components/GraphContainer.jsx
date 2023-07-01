import { Box, Flex, Grid, Paper, Text } from "@mantine/core";
import React, { useState } from "react";
import { Graph } from "./Graph";
import TotalData from "./TotalData";

const GraphContainer = ({ dark }) => {
  const [active, setActive] = useState("daily");

  return (
    <div>
      <Paper
        shadow="md"
        radius="md"
        className={`${
          dark ? "bg-[#1B1B1B] text-white" : "bg-white text-black"
        } py-[20px] sm:px-[20px] px-[10px]`}
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          mb={10}
          className="overflow-x-auto"
        >
          <Text className="mb-[10px] sm:text-xl text-sm  font-semibold ">
            Reservation Stats
          </Text>

          <Flex align={"center"} className="border-b border-gray-600">
            {["daily", "weekly", "monthly"].map((data, index) => (
              <div
                onClick={() => setActive(data)}
                key={index}
                className={`px-6 py-2 border-b-2 cursor-pointer ${
                  active == data ? "border-primary" : "border-transparent"
                }`}
              >
                <Text
                  className={`text-sm  font-medium capitalize ${
                    active == data && "text-primary"
                  }`}
                >
                  {data}
                </Text>
              </div>
            ))}
          </Flex>
        </Flex>

        <Box className="w-full h-[20px]  mt-10 flex items-center sm:gap-10 gap-3">
          <Box className="flex items-center gap-1">
            <div className="w-[10px] h-[10px] bg-primary" />
            <Text className="text-xs font-medium text-opacity-50">
              Check In
            </Text>
          </Box>
          <Box className="flex items-baseline gap-[2px]">
            <Text className="sm:text-sm text-xs font-[600] ">23,451</Text>
            <Text className="text-[10px] text-green-500">+0.4%</Text>
          </Box>
          <Box className="flex items-center gap-1">
            <div className="w-[10px] h-[10px] bg-red-500" />
            <Text className="text-xs font-medium text-opacity-50">
              Check Out
            </Text>
          </Box>
          <Box className="flex items-baseline gap-[2px]">
            <Text className="sm:text-sm text-xs font-[600] ">20,441</Text>
          </Box>
        </Box>

        <Box className="w-full my-[20px] ">
          <Graph />
        </Box>
      </Paper>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px] my-[20px]">
        <div>
          <RoomDetail quantity={683} width="w-[70%]">
            Available Room <br /> Today
          </RoomDetail>
        </div>
        <div>
          <RoomDetail quantity={156} width="w-[27%]">
            Sold Out Room <br /> Today
          </RoomDetail>
        </div>
      </div>

      <TotalData dark={dark} />
    </div>
  );
};

export default GraphContainer;

const RoomDetail = ({ children, quantity, width }) => (
  <Paper shadow={false} radius={"md"} p={30} className="bg-primary">
    <Flex justify={"space-between"} align="end">
      <Text className="text-sm text-white">{children}</Text>
      <Text className="text-base font-bold text-white">{quantity}</Text>
    </Flex>

    <div className="mt-[20px] w-full h-[12px] rounded-full bg-white bg-opacity-20 overflow-hidden relative">
      <div
        className={`absolute top-0 left-0 bg-white h-full  rounded-full ${width}`}
      />
    </div>
  </Paper>
);
