import React, { useState, useRef } from "react";
import Layout from "../Layout";
import {
  Box,
  Button,
  Flex,
  Select,
  Paper,
  Textarea,
  useMantineColorScheme,
  TextInput,
  Text,
} from "@mantine/core";

import { FloatingInput } from "../FloatingInput";
import { useForm } from "@mantine/form";
import { newsCategories } from "../../utils/data";

const AddNews = () => {
  const imageRef = useRef();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [categories, setCategories] = useState(newsCategories);

  console.log("Lee");

  const form = useForm({
    initialValues: {
      name: "",
      icon: "",
      image: "",
    },
  });

  return (
    <Layout>
      <div className="py-10 sm:px-10 px-1 ">
        <Paper
          radius={"md"}
          shadow="md"
          className="sm:p-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
          <Flex
            justify="space-between"
            align="start"
            className="md:flex-row flex-col py-[30px] sm:px-[30px] px-[10px]"
          >
            <Box
              className={`md:w-[38%] w-full h-[375px] border border-opacity-10  border-gray-400 p-[15px] rounded-md mt-[15px]
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
              className="md:w-[60%] w-full md:mt-0 mt-[14px] "
              align="start"
              direction="column"
              justify="start"
              gap={16}
            >
              <FloatingInput
                form={form}
                dark={dark}
                label="Title"
                placeholder="News Title"
              />
              <FloatingInput
                cusRef={imageRef}
                form={form}
                dark={dark}
                label="Image"
                placeholder="Please add with url"
              />
              <Select
                data={categories}
                placeholder="Select Category"
                nothingFound="Nothing found"
                searchable
                creatable
                className="w-full mt-[14px]"
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => {
                  const item = { value: query, label: query };
                  setCategories((current) => [...current, item]);
                  return item;
                }}
                sx={{
                  input: {
                    "&:focus": {
                      border: "1px solid #AA8453",
                    },
                    background: dark ? "#222222" : "transparent",
                  },
                }}
                classNames={{
                  input: "focus:border-primary ",
                  dropdown: "bg-[#1B1B1B]",
                  item: "hover:bg-[#222222]",
                }}
              />

              <Textarea
                placeholder="Content"
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
            </Flex>
          </Flex>
          <Box className="w-full mt-[14px] flex">
            <Button className="bg-primary  hover:bg-[#755e42] ml-auto">
              Add
            </Button>
          </Box>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddNews;
