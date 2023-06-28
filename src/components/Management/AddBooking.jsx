import React, { useEffect, useRef, useState } from "react";
import Layout from "../Layout";
import {
  Box,
  Button,
  Flex,
  MultiSelect,
  NumberInput,
  Paper,
  Text,
  TextInput,
  Textarea,
  useMantineColorScheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

import { FloatingInput } from "../FloatingInput";
import { facilitiesData, roomsData, roomsTypeData } from "../../utils/data";
import HotelCard from "../HotelCard";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { FloatingNumberInput } from "../FloatingNumberInput";
import { Tooltip } from "chart.js";
import {
  IconAlertCircle,
  IconCalendar,
  IconChevronDown,
} from "@tabler/icons-react";
import InputContainer from "../InputContainer";

const AddBooking = () => {
  // const autoplay = useRef(Autoplay({ delay: 1000 }));
  const [checkInOut, setCheckInOut] = useState([]);

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    console.log(checkInOut);
  }, [checkInOut]);

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
              <Box className=" grid grid-cols-2 gap-[10px] w-full">
                <TextInput
                  placeholder="First name"
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
                <TextInput
                  placeholder="Last name"
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
              </Box>
            </InputContainer>
            <InputContainer label="Guests">
              <NumberInput
                placeholder="Number of guests"
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
            <InputContainer label="Mobile">
              <TextInput
                placeholder="Mobile phone number"
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
            <InputContainer label="Email">
              <TextInput
                placeholder="Email address"
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
            <InputContainer label="Check In - Check Out">
              <DatePickerInput
                type="range"
                valueFormat="YYYY MMM DD"
                placeholder="Check In - Check Out"
                className=" w-full"
                sx={{
                  ["& .mantine-Input-wrapper"]: {
                    background: dark ? "#222222" : "transparent",
                  },
                }}
                rightSection={
                  <div>
                    <IconCalendar
                      size="1rem"
                      style={{ display: "block", opacity: 0.8 }}
                      className="text-primary"
                    />
                  </div>
                }
                value={checkInOut}
                onChange={setCheckInOut}
              />
            </InputContainer>
            <InputContainer label={"Room Type"}>
              <MultiSelect
                searchable
                className={{ input: "border border-red-600" }}
                data={roomsTypeData}
                placeholder="Select room type"
                nothingFound="Nothing found"
                sx={{
                  "& .mantine-MultiSelect-input": {
                    background: dark ? "#222222" : "transparent",
                  },

                  marginTop: 14,
                  width: "100%",
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
            <InputContainer label={"Note"} noAsterisk start>
              <Textarea
                placeholder="Note"
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
              Book Now
            </Button>
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddBooking;
