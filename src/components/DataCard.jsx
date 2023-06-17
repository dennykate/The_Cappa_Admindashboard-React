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

const DataCard = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Grid.Col md={6} lg={3}>
      <Card
        padding="lg"
        className="group bg-white flex items-center gap-[15px] p-[20px] rounded-[10px] group shadow-sm
        hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        <Flex
          justify="center"
          align="center"
          className="w-[60px] h-[60px] bg-primary group-hover:bg-opacity-100 bg-opacity-10 rounded-[10px] transition-all duration-300 ease-in-out"
        >
          <IoBedOutline
            size={32}
            className="text-primary group-hover:text-white transition-all duration-300 ease-in-out"
          />
        </Flex>
        <Flex direction="column">
          <Text fw={700} className="text-[28px]">
            8,461
          </Text>
          <Text className="text-[12px]" fw={"normal"}>
            New Booking
          </Text>
        </Flex>
      </Card>
    </Grid.Col>
  );
};

export default DataCard;
