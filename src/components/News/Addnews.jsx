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
} from "@mantine/core";

import { FloatingInput } from "../FloatingInput";
import { useForm } from "@mantine/form";
import { newsCategories } from "../../utils/data";

const AddNews = () => {
  const inputRef = useRef();
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
          className="p-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
          <Flex justify="space-between" align="start">
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
                placeholder="News Title"
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
                minRows={8}
                maxRows={8}
              />
            </Flex>

            <Flex
              justify={"start"}
              direction="column"
              className="w-[38%] mt-[15px]"
              gap={14}
            >
              <div className=" rounded-md overflow-hidden border border-gray-400 border-opacity-20 w-full h-[200px]">
                {form?.values?.image ? (
                  <img
                    src={form?.values?.image}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <button
                    onClick={() => inputRef.current.focus()}
                    className="w-full h-full bg-[#222222]
                flex justify-center items-center cursor-pointer"
                  >
                    <i class="fi fi-sr-mode-landscape text-[40px] text-primary"></i>
                  </button>
                )}
              </div>
              <FloatingInput
                cusRef={inputRef}
                form={form}
                dark={dark}
                label="Thumbnail"
                placeholder="Please add with url"
              />
            </Flex>
          </Flex>
          <Box className="w-full mt-[14px] flex">
            <Button className="bg-primary  hover:bg-[#755e42] ml-auto">
              Add News
            </Button>
          </Box>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddNews;
