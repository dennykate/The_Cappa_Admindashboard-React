import React, { useState } from "react";
import Layout from "../Layout";
import {
  Box,
  Button,
  Flex,
  MultiSelect,
  Paper,
  Textarea,
  useMantineColorScheme,
} from "@mantine/core";
import Lottie from "lottie-react";

import { FloatingInput } from "../FloatingInput";
import { facilitiesData } from "../../utils/data";
import roomsAnimation from "../../assets/rooms-animation.json";
import { useForm } from "@mantine/form";

const AddRoom = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const form = useForm({
    initialValues: {
      name: "",
      image: "",
      price: "",
    },
  });

  return (
    <Layout>
      <div className="py-10 sm:px-5 px-1 ">
        <Paper
          radius={"md"}
          shadow="md"
          className="p-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
          <Flex justify="space-between">
            <Box
              className={`w-[38%] h-[400px] border border-dashed p-[10px] rounded-md mt-[15px]  ${
                dark ? "border-white" : "border-black"
              }`}
            >
              {form?.values?.image ? (
                <img
                  src={form?.values?.image}
                  alt="image"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-full rounded-md flex justify-center items-center">
                  <Lottie
                    animationData={roomsAnimation}
                    loop
                    className="w-[200px]"
                  />
                </div>
              )}
            </Box>
            <Flex
              className="w-[60%] "
              align="start"
              direction="column"
              gap={16}
            >
              <FloatingInput
                form={form}
                dark={dark}
                label="Name"
                placeholder="Add room name"
              />
              <FloatingInput
                form={form}
                dark={dark}
                label="Image"
                placeholder="Please add with url"
              />
              <FloatingInput
                form={form}
                dark={dark}
                label="Price"
                placeholder="Price with dollar"
              />
              <MultiSelect
                className="mt-[14px] w-full"
                data={facilitiesData}
                placeholder="Facilities"
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
              <Button className="bg-primary  hover:bg-[#755e42] ml-auto">
                Add Room
              </Button>
            </Flex>
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddRoom;
