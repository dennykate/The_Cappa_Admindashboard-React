import { Box } from "@mantine/core";
import React from "react";

const HotelCard = ({ img, name, price, time }) => {
  return (
    <Box className="w-full relative">
      <img src={img} alt="image" className="w-full rounded-md" />

      <Box
        className="w-full h-[100px]  absolute bottom-0 left-0 from-black bg-gradient-to-t px-[20px] flex
       items-start justify-center gap-[5px] flex-col"
      >
        <h6 className="text-xl font-bold text-primary">{name}</h6>
        <p className=" capitalize">
          {price}$ / {time}
        </p>
      </Box>
    </Box>
  );
};

export default HotelCard;
