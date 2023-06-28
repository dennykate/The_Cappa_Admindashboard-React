import React from "react";
import Layout from "../Layout";
import {
  Box,
  Button,
  Flex,
  NumberInput,
  Paper,
  Select,
  TextInput,
  Textarea,
  useMantineColorScheme,
} from "@mantine/core";
import InputContainer from "../InputContainer";
import { IconChevronDown } from "@tabler/icons-react";

const Addmenu = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Layout>
      <div className="py-10 sm:px-10 px-1">
        <Paper
          radius={"md"}
          shadow="md"
          className="p-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
          <Flex
            className="w-[100%]"
            align="start"
            direction="column"
            gap={40}
            p={30}
          >
            <InputContainer label="Name">
              <TextInput
                placeholder="Menu's name"
                className="w-full"
                sx={{
                  input: {
                    background: dark ? "#222222" : "transparent",
                    "&:focus": {
                      border: "1px solid #AA8453",
                    },
                  },
                }}
              />
            </InputContainer>
            <InputContainer label="Price">
              <NumberInput
                min={0}
                placeholder="Menu's price"
                className="w-full"
                sx={{
                  input: {
                    background: dark ? "#222222" : "transparent",
                    "&:focus": {
                      border: "1px solid #AA8453",
                    },
                  },
                }}
              />
            </InputContainer>
            <InputContainer label="Category">
              <Select
                placeholder="Menu's category"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
                className="w-full"
                sx={{
                  input: {
                    background: dark ? "#222222" : "transparent",
                    "&:focus": {
                      border: "1px solid #AA8453",
                    },
                  },
                }}
                rightSection={
                  <IconChevronDown
                    size="1rem"
                    style={{ display: "block", opacity: 0.8 }}
                    className="text-primary"
                  />
                }
              />
            </InputContainer>
            <InputContainer label="Description" noAsterisk start>
              <Textarea
                placeholder="Description"
                className=" w-full"
                sx={{
                  textarea: {
                    "&:focus": {
                      border: "1px solid #AA8453",
                    },
                    background: dark ? "#222222" : "transparent",
                  },
                }}
                minRows={4}
                maxRows={4}
              />
            </InputContainer>
            <Button className="bg-primary ml-auto  hover:bg-[#755e42]">
              Add Menu
            </Button>
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default Addmenu;
