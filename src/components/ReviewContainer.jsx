import { Paper, Text } from "@mantine/core";
import React from "react";
import ReviewCarousel from "./ReviewCarousel";

const ReviewContainer = ({ dark }) => {
  return (
    <Paper
      mt={20}
      shadow="md"
      radius="md"
      className={`${
        dark ? "bg-[#1B1B1B] text-white" : "bg-white text-black"
      } py-[30px] sm:px-[30px] px-[10px]`}
    >
      <Text className=" sm:text-xl text-lg  font-semibold mb-[20px]">
        Latest Review by Customers
      </Text>
      <ReviewCarousel dark={dark} />
    </Paper>
  );
};

export default ReviewContainer;
