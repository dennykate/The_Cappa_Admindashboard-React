import { ActionIcon, Flex, Group, Select, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const PaginationPart = ({
  limit,
  setLimit,
  prevPageHandler,
  nextPageHandler,
  initialValue,
  valuesPerPage,
  page,
  setPage,
  data,
  active,
}) => {
  const mediumScreen = useMediaQuery("(min-width: 640px)");
  return (
    <Flex
      justify={"end"}
      align={"center"}
      px={mediumScreen ? 30 : 10}
      py={mediumScreen ? 20 : 10}
      c="dimmed"
      className="text-sm gap-2"
    >
      <Text>Items per Page: </Text>
      <Select
        defaultValue={limit}
        dropdownPosition="top"
        data={[
          { value: "5", label: "5" },
          { value: "10", label: "10" },
          { value: "25", label: "25" },
          { value: "100", label: "100" },
        ]}
        styles={{
          item: {
            // applies styles to selected item
            "&[data-selected]": {
              "&, &:hover": {
                backgroundColor: "#AA8453",
              },
            },
          },
        }}
        classNames={{
          input:"focus:border-primary"
        }}
        className="w-20 "
        onChange={(value) => {
          setLimit(value);
          if (parseInt(value) > parseInt(limit)) {
            setPage(Math.ceil(page / (value / limit)));
          } else {
            setPage(1);
          }
        }}
      />
      <Text className={`text-sm ${mediumScreen?"px-5":"px-1"}`} c={"dimmed"}>
        {initialValue + 1} to{" "}
        {valuesPerPage < data.length ? valuesPerPage : data.length} of{" "}
        {data.length}
      </Text>

      <Flex position="apart">
        <ActionIcon
          onClick={() => prevPageHandler()}
          className={active === "prev" && "text-primary"}
        >
          <MdArrowBackIos />
        </ActionIcon>

        <ActionIcon
          onClick={() => nextPageHandler()}
          className={active === "next" && "text-primary"}
        >
          <MdArrowForwardIos />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};

export default PaginationPart;
