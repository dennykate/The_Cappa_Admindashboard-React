import React, { useEffect, useRef, useState } from "react";
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
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

import { FloatingInput } from "../components/FloatingInput";
import { facilitiesData, roomsData, roomsTypeData } from "../utils/data";
import HotelCard from "../components/HotelCard";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { FloatingNumberInput } from "../components/FloatingNumberInput";
import { Tooltip } from "chart.js";
import { IconAlertCircle, IconCalendar } from "@tabler/icons-react";

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
      <div className="py-10 sm:px-5 px-1">
        <Paper
          radius={"md"}
          shadow="md"
          className="p-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
          <Flex justify="space-between" align="start" className=" flex-grow">
            <Flex
              className="w-[100%]"
              align="start"
              direction="column"
              gap={16}
            >
              <FloatingInput dark={dark} label="Name" placeholder="Your Name" />
              <FloatingNumberInput
                dark={dark}
                label="Guests Count"
                placeholder="Adults - Children"
              />
              <FloatingInput
                dark={dark}
                label="Mobile"
                placeholder="Mobile Number"
              />
              <FloatingInput
                dark={dark}
                label="Email"
                placeholder="Email"
              />
              <DatePickerInput
                type="range"
                valueFormat="YYYY MMM DD"
                placeholder="Check In - Check Out"
                className="mt-[14px] w-full"
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
              <MultiSelect
                searchable
                className={{ input: "border border-red-600" }}
                data={roomsTypeData}
                placeholder="Room Type"
                nothingFound="Nothing found"
                sx={{
                  "& .mantine-MultiSelect-input": {
                    background: dark ? "#222222" : "transparent",
                  },

                  marginTop: 14,
                  width: "100%",
                }}
              />
              <Textarea
                placeholder="Note"
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
                Book Now
              </Button>
            </Flex>
            {/* <Box
              className={`w-[38%] border border-dotted p-[10px] rounded-md mt-[15px] ${
                dark ? "border-white" : "border-black"
              }`}
            >
              <Carousel
                loop
                auto
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                sx={{
                  ["& .mantine-Carousel-control"]: {
                    background: "#AA8453",
                    width: 40,
                    height: 40,
                    borderRadius: 4,
                    opacity: 1,
                    border: "none",
                  },
                }}
                nextControlIcon={<HiArrowRight size={20} color="white" />}
                previousControlIcon={<HiArrowLeft size={20} color="white" />}
              >
                {roomsData.map((data, index) => (
                  <Carousel.Slide key={index}>
                    <HotelCard {...data} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Box> */}
          </Flex>
        </Paper>
      </div>
    </Layout>
  );
};

export default AddBooking;
