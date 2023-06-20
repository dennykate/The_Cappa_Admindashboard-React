import { ActionIcon, Flex, Grid, Paper, Text } from "@mantine/core";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

import { totalData } from "../utils/data";

const TotalData = ({ dark }) => {
  return (
    <Paper
      p={30}
      radius={"md"}
      shadow="sm"
      className={dark ? "bg-[#1B1B1B] text-white" : "bg-white text-black"}
    >
      <Grid gutter={30}>
        {totalData.map(({ quantity, name }, index) => (
          <Grid.Col
            key={index}
            md={6}
            className="flex flex-col justify-center items-center gap-[10px]"
          >
            <Text fw={700} className=" text-2xl">
              {quantity}
            </Text>
            <Text className="text-sm">{name}</Text>
          </Grid.Col>
        ))}
      </Grid>
      <Flex justify="space-between" align="center" gap={50} mt={50}>
        <Flex direction="column" gap={10}>
          <Text className="text-base font-semibold">
            Let Travl Generate Your Annualy Report Easily
          </Text>
          <Text className="text-xs font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labo
          </Text>
        </Flex>
        <HiArrowRight
          size={32}
          className="hover:text-[#E23428] cursor-pointer"
        />
      </Flex>
    </Paper>
  );
};

export default TotalData;
