import {
  Box,
  Card,
  Flex,
  Grid,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { IoBedOutline } from "react-icons/io5";

const DataCard = ({ Icon, quantity, title }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Card
      padding="lg"
      className={`group  flex items-center gap-[15px] p-[20px] rounded-[10px] group shadow-sm
        hover:shadow-lg  ${
          dark ? "bg-[#1B1B1B] text-gray-300" : "bg-white text-black"
        }`}
    >
      <Flex
        justify="center"
        align="center"
        className="w-[60px] h-[60px] bg-primary  group-hover:bg-opacity-100 bg-opacity-10 rounded-[10px] transition-all duration-300 ease-in-out"
      >
        <Icon
          size={32}
          className="text-primary group-hover:text-white transition-all duration-300 ease-in-out"
        />
      </Flex>
      <Flex direction="column">
        <Text fw={700} className="text-[28px]">
          {quantity}
        </Text>
        <Text className="text-[12px]" fw={"normal"}>
          {title}
        </Text>
      </Flex>
    </Card>
  );
};

export default DataCard;
