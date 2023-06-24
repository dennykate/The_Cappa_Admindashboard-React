import React, { useState } from "react";
import {
  allBookingTabs,
  data as bookingData,
  bookingHeads,
} from "../utils/data";
import {
  createStyles,
  Group,
  Text,
  rem,
  Checkbox,
  Avatar,
  Badge,
  ActionIcon,
  Anchor,
  Flex,
} from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

import CustomTable from "./CustomTable";
import ListHeaderTabs from "./ListHeaderTabs";
import { filterStatus } from "../utils/functions";

const genderColors = {
  male: "bg-[#4CAF4F] bg-opacity-30 text-[#4CAF4F]",
  female: "bg-[#6A64B9] bg-opacity-30 text-[#6A64B9]",
};

const paymentColors = {
  paid: "bg-[#4CAF4F] bg-opacity-30 text-[#4CAF4F]",
  unpaid: "bg-red-500 bg-opacity-30 text-red-500",
};

const useStyles = createStyles((theme) => ({
  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : "#EEE6DD",
  },
}));

export default function TableComponent({ dark }) {
  // const [search, setSearch] = useState("");
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["1"]);
  const [activeTab, setActiveTab] = useState(allBookingTabs[0].name);
  const [sortedData, setSortedData] = useState(bookingData);
  const [initialValue, setInitialValue] = useState(null);
  const [valuesPerPage, setValuesPerPage] = useState(null);

  const rows = sortedData
    .filter((data) => filterStatus(data, activeTab, "All Booking", "payment"))
    .slice(initialValue, valuesPerPage)
    .map((item, index) => {
      const selected = selection.includes(item.id);
      return (
        <tr key={index} className={cx({ [classes.rowSelected]: selected })}>
          <td>
            <Checkbox
              color="yellow"
              checked={selection.includes(item.id)}
              onChange={() => toggleRow(item.id)}
              transitionDuration={0}
            />
          </td>
          <td>
            <Avatar size={30} src={item.avatar} radius={26} />
          </td>
          <td>
            <Text fz="sm" fw={500} c={dark ? "AA8453" : "#1B1B1B"}>
              {item.name}
            </Text>
          </td>
          <td>
            <Badge
              size="md"
              radius={"sm"}
              className={genderColors[item.gender.toLowerCase()]}
            >
              {item.gender}
            </Badge>
          </td>
          <td>
            <Text fz="sm" c="dimmed">
              {item.mobile}
            </Text>
          </td>
          <td className="truncate">
            <Anchor
              component="button"
              size="sm"
              className="text-starColor truncate"
            >
              {item.email}
            </Anchor>
          </td>
          <td>
            <Text fz="sm" c="dimmed">
              {item.checkIn}
            </Text>
          </td>
          <td>
            <Text fz="sm" c="dimmed">
              {item.checkOut}
            </Text>
          </td>
          <td>
            <Text fz="sm" c="dimmed">
              {item.roomType}
            </Text>
          </td>
          <td>
            <Badge
              size="md"
              radius={"sm"}
              className={paymentColors[item.payment.toLowerCase()]}
            >
              {item.payment}
            </Badge>
          </td>
          <td>
            <Flex align={"center"} gap={5}>
              <ActionIcon>
                <IconPencil
                  size="1.25rem"
                  stroke={1.5}
                  className="text-purple-500"
                />
              </ActionIcon>
              <ActionIcon color="red">
                <IconTrash size="1.25rem" stroke={1.5} />
              </ActionIcon>
            </Flex>
          </td>
        </tr>
      );
    });

  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

  return (
    <>
      <ListHeaderTabs
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        Tabs={allBookingTabs}
      />
      <CustomTable
        // search={search}
        data={bookingData}
        heads={bookingHeads}
        rows={rows}
        sortedData={sortedData}
        setSortedData={setSortedData}
        selection={selection}
        setSelection={setSelection}
        setInitialValue={setInitialValue}
        setValuesPerPage={setValuesPerPage}
      >
        {rows}
      </CustomTable>
    </>
  );
}
