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
import { menuCategories } from "../../utils/data";

const Addmenu = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Layout>
      <div className="py-10 sm:px-10 px-1">
        <Paper
          radius={"md"}
          shadow="md"
          className="sm:p-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
          <Flex
            className="w-[100%] sm:gap-[40px] gap-[20px] py-[30px] sm:px-[30px] px-[10px]"
            align="start"
            direction="column"
            gap={40}
            p={30}
          >
            <InputContainer label="Menu Name">
              <TextInput
                placeholder="Mont Hin Gar"
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
            <InputContainer label="Menu Price">
              <NumberInput
                min={0}
                placeholder="34$"
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
            <InputContainer label="Menu Category">
              <Select
                placeholder="Breakfast"
                data={menuCategories}
                className="w-full"
                sx={{
                  input: {
                    background: dark ? "#222222" : "transparent",
                    "&:focus": {
                      border: "1px solid #AA8453",
                    },
                  },
                }}
                classNames={{
                  input: "focus:border-primary ",
                  dropdown: "bg-[#1B1B1B]",
                  item: "hover:bg-[#222222]",
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
            <InputContainer label="Description" start>
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
              Add
            </Button>
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default Addmenu;
