import React, { useState } from "react";
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
  Anchor,
  Text,
} from "@mantine/core";

import { FloatingInput } from "../FloatingInput";
import { useForm } from "@mantine/form";

const AddFacilities = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const form = useForm({
    initialValues: {
      name: "",
      icon: "",
    },
  });

  return (
    <Layout>
      <div className="py-10 sm:px-10 px-1 ">
        <Paper
          radius={"md"}
          shadow="md"
          className="p-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
          <Flex justify="space-between" align="start">
            <Box
              className={`w-[38%] h-[350px] border border-opacity-10  border-gray-400  p-[10px] rounded-md mt-[15px]  ${
                dark ? "border-white" : "border-black"
              }`}
            >
              <div
                className={`w-full h-full rounded-md overflow-hidden flex justify-center items-center
               ${dark ? "bg-[#222222]" : "bg-[#f5f5f5]"}`}
              >
                {form?.values?.icon ? (
                  <span
                    class={`text-[120px] text-primary ${form?.values?.icon}`}
                  ></span>
                ) : (
                  <div className="flex flex-col items-center">
                    <span
                      class={`text-[120px] text-primary fi fi-ss-triangle-warning`}
                    ></span>
                    <Text className="text-center -mt-10 text-sm text-primary animate-pulse">
                      Please add icon first !
                    </Text>
                  </div>
                )}
              </div>
            </Box>
            <Flex
              className="w-[60%] "
              align="start"
              direction="column"
              justify="start"
              gap={16}
            >
              <FloatingInput
                form={form}
                dark={dark}
                label="Title"
                placeholder="Facility Title"
              />
              <FloatingInput
                form={form}
                dark={dark}
                label="Icon"
                placeholder="Flaticon ( eg. flaticon-breakfast )"
              />
              <Text className="text-xs -mt-4">
                You can find icons at{" "}
                <Anchor
                  className="text-primary"
                  href="https://www.flaticon.com/search?word=women&type=uicon"
                  target="_blank"
                >
                  here
                </Anchor>
              </Text>
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
                minRows={8}
                maxRows={8}
              />
              <Button className="bg-primary  hover:bg-[#755e42] ml-auto">
                Add Service
              </Button>
            </Flex>
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddFacilities;
