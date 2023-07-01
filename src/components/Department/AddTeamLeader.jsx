import React, { useRef, useState } from "react";
import Layout from "../Layout";
import {
  Box,
  Button,
  Flex,
  MultiSelect,
  Paper,
  Text,
  Textarea,
  useMantineColorScheme,
  Grid,
  Input,
} from "@mantine/core";

import { FloatingInput } from "../FloatingInput";
import { facilitiesData } from "../../utils/data";
import { useForm } from "@mantine/form";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
} from "@tabler/icons-react";

const AddTeamLeader = () => {
  const imageRef = useRef();
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
      <div className="py-10 sm:px-10 px-1 ">
        <Paper
          radius={"md"}
          shadow="md"
          className="sm:px-[20px] px-[10px] py-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
          <Flex justify="space-between" className="md:flex-row flex-col">
            <Box
              className={`md:w-[38%] w-full h-[375px] border border-opacity-10  border-gray-400 p-[15px] 
              rounded-md mt-[15px]
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
              className="md:w-[60%] w-full md:mt-0 mt-5"
              align="start"
              direction="column"
              gap={14}
              mt={10}
            >
              <Text className="text-sm -mb-1">
                Basic Info <span className="text-red-500">*</span>
              </Text>
              <FloatingInput
                form={form}
                dark={dark}
                label="Leader's name"
                placeholder="John Doe"
              />
              <FloatingInput
                cusRef={imageRef}
                form={form}
                dark={dark}
                label="Image"
                placeholder="Please add with url"
              />
              <FloatingInput
                form={form}
                dark={dark}
                label="Leader's department"
                placeholder="Restaurant"
              />
              <FloatingInput
                form={form}
                dark={dark}
                label="Leader's email"
                placeholder="doe@gmail.com"
              />
              <Box className="w-full mt-[10px]" p={0}>
                <Text className="text-sm mb-[20px]">
                  Social Accounts <span className="text-red-500">*</span>
                </Text>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-[16px]">
                  <div>
                    <Input
                      sx={{
                        input: {
                          background: dark ? "#222222" : "transparent",
                        },
                      }}
                      icon={<IconBrandInstagram size="1rem" />}
                      placeholder="Instagram"
                      classNames={{
                        input: "focus:border-primary",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      sx={{
                        input: {
                          background: dark ? "#222222" : "transparent",
                        },
                      }}
                      icon={<IconBrandTwitter size="1rem" />}
                      placeholder="Twitter"
                      classNames={{
                        input: "focus:border-primary",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      sx={{
                        input: {
                          background: dark ? "#222222" : "transparent",
                        },
                      }}
                      icon={<IconBrandFacebook size="1rem" />}
                      placeholder="Facebook"
                      classNames={{
                        input: "focus:border-primary",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      sx={{
                        input: {
                          background: dark ? "#222222" : "transparent",
                        },
                      }}
                      icon={<IconBrandPinterest size="1rem" />}
                      placeholder="Pinterest"
                      classNames={{
                        input: "focus:border-primary",
                      }}
                    />
                  </div>
                </div>
              </Box>
              <Button className="bg-primary  hover:bg-[#755e42] ml-auto mt-[20px]">
                Add
              </Button>
            </Flex>
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddTeamLeader;
