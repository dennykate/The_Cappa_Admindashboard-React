import {
  Avatar,
  Box,
  Button,
  Menu,
  Text,
  createStyles,
  rem,
  Checkbox,
  Badge,
  useMantineColorScheme,
  Anchor,
  ActionIcon,
  Flex,
  Image,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import ListHeaderTabs from "../ListHeaderTabs";
import { IconChevronDown, IconDots, IconEdit, IconPencil, IconTrash } from "@tabler/icons-react";
import * as dayjs from "dayjs";
import "dayjs/locale/en";

import { dateRange, guestListHeads, guestListTabs } from "../../utils/data";
import { guestListData } from "../../utils/guestListData";
import CustomTable from "../CustomTable";
import { filterStatus } from "../../utils/functions";

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

const GuestList = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, cx } = useStyles();
  const [fullDate, setFullDate] = useState([]);
  const [activeTab, setActiveTab] = useState(guestListTabs[0].name);
  const [selection, setSelection] = useState(["1"]);
  const [sortedData, setSortedData] = useState(guestListData);
  const [initialValue, setInitialValue] = useState(null);
  const [valuesPerPage, setValuesPerPage] = useState(null);
  console.log(activeTab);

  useEffect(() => {
    setFullDate([formatDateFunc(-7), formatDateFunc(null)]);
  }, []);

  const formatDateFunc = (set) => {
    let date = dayjs();
    if (set == "first") {
      date = date.startOf("month");
    } else if (set == "last") {
      date = date.endOf("month");
    } else if (set) {
      date = date.set("D", new Date().getDate() + set);
    }
    const formattedDate = date.format("D MMMM YYYY");

    return formattedDate;
  };

  const rows = sortedData
    .filter((data) => filterStatus(data, activeTab, "All Guest", "status"))
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
          <td className="flex items-center justify-center bg-red-400">
            <Flex className="gap-3">
            <Image  src={item.avatar} />
            <Text fz="sm" fw={500} c={dark ? "AA8453" : "#1B1B1B"}>
              {item.name}
            </Text>
            </Flex>
          </td>

          <td>
            <Badge
              size="md"
              radius={"sm"}
              // className={genderColors[item.gender.toLowerCase()]}
            >
              {item.guestId}
            </Badge>
          </td>
          <td className="whitespace-nowrap">
            <Text fz="sm" c="dimmed">
              {item.dateOrder}
            </Text>
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
              {item.specialRequest}
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
              // className={paymentColors[item.payment.toLowerCase()]}
            >
              {item.status}
            </Badge>
          </td>
          <td>
            <Menu
              transitionProps={{ transition: "pop" }}
              withArrow
              position="bottom-end"
              withinPortal
              classNames={{ item: "w-[120px]" }}
            >
              <Menu.Target>
                <ActionIcon>
                  <IconDots size="1rem" stroke={1.5} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item icon={<IconEdit size="1rem" stroke={1.5} />}>
                  Edit
                </Menu.Item>

                <Menu.Item
                  icon={<IconTrash size="1rem" stroke={1.5} />}
                  color="red"
                >
                  Delete
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
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
    <Layout>
      <Box className="p-10">
        <ListHeaderTabs
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          Tabs={guestListTabs}
          path={"/"}
          isGuestList
        >
          <Menu
            transitionProps={{ transition: "pop" }}
            withArrow
            position="bottom-end"
            withinPortal
            classNames={{ item: "w-[120px]" }}
          >
            <Menu.Target>
              <Button
                rightIcon={
                  <IconChevronDown size="1rem" className="text-white" />
                }
                h={40}
                className="bg-primary hover:bg-primary hover:bg-opacity-80"
              >
                {fullDate.join(" - ")}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {dateRange.map(({ name, dateFormat }, index) => (
                <Menu.Item
                  key={index}
                  onClick={() =>
                    setFullDate([
                      formatDateFunc(dateFormat[0]),
                      formatDateFunc(dateFormat[1]),
                    ])
                  }
                  className={`w-[150px] ${
                    dark ? "text-white" : "text-gray-400"
                  } `}
                >
                  {name}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </ListHeaderTabs>
        <CustomTable
          // search={search}
          data={guestListData}
          heads={guestListHeads}
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
      </Box>
    </Layout>
  );
};

export default GuestList;
