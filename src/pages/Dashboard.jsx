import { Badge, Box, Button, Text } from "@mantine/core";
import React from "react";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <Box>
        <Text>Dashboard</Text>
        <Button color="ocean-blue">Ocean blue button</Button>
        <Badge color="bright-pink" variant="filled">
          Bright pink badge
        </Badge>
      </Box>
    </Layout>
  );
};

export default Dashboard;
