import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Paper,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import Calendar from "react-calendar";

import NotificationCard from "./NotificationCard";
import { notificationData } from "../utils/data";

const CalendarContainer = ({ dark }) => {
  const [value, onChange] = useState(new Date());
  const [limit, setLimit] = useState(4);

  const handleLimitChange = () => {
    if (limit < notificationData.length) {
      setLimit(limit + 1);
    } else {
      setLimit(4);
    }
  };

  return (
    <Grid.Col lg={6}>
      <Paper
        shadow="md"
        radius={"md"}
        className={`${
          dark ? "bg-[#1B1B1B] text-white" : "bg-white text-black"
        } py-[20px] sm:px-[20px] px-[10px]`}
      >
        <Text className="mb-[10px] sm:text-xl text-lg  font-semibold">
          Recent Booking Schedule
        </Text>

        <Calendar
          className={`react-calendar__tile ${
            dark ? "calendar_dark_theme" : "calendar_light_theme"
          }`}
          onChange={onChange}
          value={value}
        />
        <Divider />
        <Box py={10}>
          {notificationData?.slice(0, limit).map((data, index) => (
            <NotificationCard key={index} dark={dark} {...data} />
          ))}
          <Flex justify={"center"} align={"center"} mt={20}>
            <button
              onClick={handleLimitChange}
              className="text-sm text-primary hover:underline "
            >
              {limit < notificationData.length ? "View More" : "View Less"}
            </button>
          </Flex>
        </Box>
      </Paper>
    </Grid.Col>
  );
};

export default CalendarContainer;
