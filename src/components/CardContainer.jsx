import { Grid } from "@mantine/core";
import React from "react";

import DataCard from "./DataCard";
import { cardData } from "../utils/data";

const CardContainer = ({ dark }) => {
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px] sm:px-[20px] px-[10px] py-[20px]">
      {cardData?.map((data, index) => (
        <DataCard key={index} {...data} />
      ))}
    </div>
  );
};

export default CardContainer;
