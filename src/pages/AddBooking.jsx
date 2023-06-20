import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  Flex,
  MultiSelect,
  Paper,
  Textarea,
  useMantineColorScheme,
} from "@mantine/core";
import { FloatingInput } from "../components/FloatingInput";
import { facilitiesData } from "../utils/data";

const AddBooking = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Layout>
      <div className="py-10 sm:px-5 px-1">
        <Paper
          radius={"md"}
          shadow="md"
          className="p-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
          <Flex justify="space-between">
            <Flex
              className="w-[60%] "
              align="start"
              direction="column"
              gap={16}
            >
              <FloatingInput
                dark={dark}
                label="Room Photo"
                placeholder="Please add with url"
              />
              <FloatingInput
                dark={dark}
                label="Room Name"
                placeholder="Add room name"
              />
              <FloatingInput
                dark={dark}
                label="Room Price"
                placeholder="Price with dollar"
              />
              <MultiSelect
                className="mt-[14px] w-full"
                data={facilitiesData}
                placeholder="Room Facilities"
                sx={{
                  "& .mantine-MultiSelect-input": {
                    background: dark ? "#222222" : "transparent",
                  },
                }}
              />
              <Textarea
                placeholder="Description"
                className="mt-[14px] w-full"
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
              <Button className="bg-primary  hover:bg-[#755e42]">
                Add Room
              </Button>
            </Flex>
            <Box
              className={`w-[38%] border border-dotted p-[10px] rounded-md mt-[15px] ${
                dark ? "border-white" : "border-black"
              }`}
            >
              <img
                src="https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/2.jpg"
                alt="image"
                className="w-full rounded-md"
              />
            </Box>
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddBooking;
