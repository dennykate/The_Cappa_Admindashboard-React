import { Box, Card, Flex, Grid, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { IoBedOutline } from "react-icons/io5";

const DataCard = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Grid.Col span={3}>
      <Card
        shadow="md"
        padding="lg"
        className="group bg-white flex items-center gap-[5px] p-[20px] rounded-[10px]"
      >
        <Flex
          justify="center"
          align="center"
          className="w-[60px] h-[60px] bg-primary bg-opacity-10 rounded-[10px]"
        >
          <IoBedOutline size={30} className="text-primary" />
        </Flex>
        <Flex direction="column"></Flex>
      </Card>
    </Grid.Col>
  );
};

export default DataCard;
