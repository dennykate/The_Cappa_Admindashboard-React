import React, { useRef, useState } from "react";
import Layout from "../Layout";
import {
  Box,
  Button,
  Flex,
  MultiSelect,
  Autocomplete,
  Paper,
  Textarea,
  useMantineColorScheme,
  Text,
} from "@mantine/core";
import Lottie from "lottie-react";

import { FloatingInput } from "../FloatingInput";

import restaurantService from "../../assets/restaurant-service.json";
import { useForm } from "@mantine/form";
import { hotelServiceCategories } from "../../utils/data";

const AddServices = () => {
  const imageRef = useRef();

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  console.log("Lee");

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
              className={`w-[38%] h-[375px] border border-opacity-10  border-gray-400 p-[15px] rounded-md mt-[15px]
              shadow-md shadow-[#0000008a]   ${
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
                <div
                  className={`w-full h-full rounded-md flex justify-center items-center flex-col gap-[6px] relative
                 border-opacity-20  ${dark ? "bg-[#222222]" : "bg-[#f5f5f5]"}`}
                >
                  <Text className="text-[28px] " fw="bold">
                    768 x 800
                  </Text>
                  <Text color="dimmed" fz="xs" className=" text-center">
                    Please choose image according <br /> to the aspected ratio
                  </Text>

                  <button
                    onClick={() => imageRef.current.focus()}
                    className={`w-[35px] h-[35px] rounded absolute top-3 right-3  flex justify-center
                   items-center shadow-md shadow-[#0000008a] ${
                     dark ? "bg-[#363636]" : "bg-[#f5f5f5]"
                   }`}
                  >
                    <span class="fi fi-rr-pencil text-primary translate-y-[3px]"></span>
                  </button>
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
                label="Title"
                placeholder="Service Title"
              />
              <FloatingInput
                cusRef={imageRef}
                form={form}
                dark={dark}
                label="Image"
                placeholder="Please add with url"
              />
              <Autocomplete
                placeholder="Category"
                data={hotelServiceCategories}
                classNames={{
                  input: "focus:border-primary ",
                  dropdown: "bg-[#1B1B1B]",
                  item: "hover:bg-[#222222]",
                }}
                sx={{
                  input: {
                    background: dark ? "#222222" : "transparent",
                  },
                  width: "100%",
                  marginTop: 10,
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
                minRows={7}
                maxRows={7}
              />
              <Button className="bg-primary  hover:bg-[#755e42] ml-auto">
                Add 
              </Button>
            </Flex>
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddServices;
