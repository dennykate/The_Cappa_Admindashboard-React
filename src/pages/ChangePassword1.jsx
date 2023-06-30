import React from "react";
import Layout from "../components/Layout";
import { Box, Button, Flex, Paper, PasswordInput, Title } from "@mantine/core";

const ChangePassword = () => {
  return (
    <Layout>
      <Flex justify={"center"} align={"center"} className="p-10 ">
        <Paper h={570} shadow="md" className="w-full p-10">
          <Flex className="w-full h-full">
            <Box className="w-[50%] h-full">
              <Title order={1} className="mb-6 font-medium">
                Change Your Password
              </Title>
              <PasswordInput
                label="Current Password"
                classNames={{
                  label: "text-lg mb-3",
                  innerInput: "h-12 text-base pl-5",
                  input: "h-12",
                  visibilityToggle: "hover:bg-transparent",
                  rightSection:"w-[50px]"
                }}
                className="mb-6 "
              />
              <PasswordInput
                label="Current Password"
                classNames={{ label: "text-lg mb-3", input: "h-12" }}
                className="mb-6"
              />
              <Button></Button>
            </Box>
            <Box className="w-[50%] h-full"></Box>
          </Flex>
        </Paper>
      </Flex>
    </Layout>
  );
};

export default ChangePassword;
