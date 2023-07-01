import React, { useState, useRef } from "react";
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
  const iconRef = useRef();

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
                  <div className="flex flex-col items-center justify-center relative w-full h-full">
                    <Text c="dimmed" className="text-center -mt-10 text-sm ">
                      Please add icon first !
                    </Text>

                    <button
                      onClick={() => iconRef.current.focus()}
                      className={`w-[35px] h-[35px] rounded absolute top-3 right-3  flex justify-center
                   items-center shadow-md shadow-[#0000008a] ${
                     dark ? "bg-[#363636]" : "bg-[#f5f5f5]"
                   }`}
                    >
                      <span class="fi fi-rr-pencil text-primary translate-y-[3px]"></span>
                    </button>
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
                cusRef={iconRef}
                label="Icon"
                placeholder="Flaticon ( eg. flaticon-breakfast )"
              />
              <Text className="text-xs -mt-4" c="dimmed">
                You can find icons at{" "}
                <Anchor
                  className="text-primary underline"
                  href="https://www.flaticon.com/search?word=women&type=uicon"
                  target="_blank"
                >
                  here
                </Anchor>{" "}
                .
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
                Add 
              </Button>
            </Flex>
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddFacilities;
