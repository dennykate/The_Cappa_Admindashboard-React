import { Badge, Box, Button, Text } from "@mantine/core";
import React from "react";

const Dashboard = () => {
  return (
    <Box>
      <Text>Dashboard</Text>
      <Button color="ocean-blue">Ocean blue button</Button>
      <Badge color="bright-pink" variant="filled">
        Bright pink badge
      </Badge>
    </Box>
  );
};

export default Dashboard;
