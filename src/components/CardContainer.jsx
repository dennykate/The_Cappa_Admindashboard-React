import { Grid } from "@mantine/core";
import React from "react";

import DataCard from "./DataCard";
import { cardData } from "../utils/data";

const CardContainer = ({ dark }) => {
  return (
    <Grid gutter={20}>
      {cardData?.map((data, index) => (
        <DataCard key={index} {...data} />
      ))}
    </Grid>
  );
};

export default CardContainer;
