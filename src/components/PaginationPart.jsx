import { ActionIcon, Flex, Group, Select, Text } from "@mantine/core";
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
  return (
    <Flex
      justify={"end"}
      align={"center"}
      px={30}
      py={20}
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
        className="w-20 "
        onChange={(value) => {
          setLimit(value);

          if (value > limit) {
            setPage(Math.ceil(page / (value / limit)));
          } else {
            setPage(1);
          }
        }}
      />
      <Text className="text-sm px-5" c={"dimmed"}>
        {initialValue + 1} to{" "}
        {valuesPerPage < data.length ? valuesPerPage : data.length} of{" "}
        {data.length}
      </Text>

      <Group position="apart">
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
      </Group>
    </Flex>
  );
};

export default PaginationPart;
