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
  ActionIcon,
  Flex,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import ListHeaderTabs from "../ListHeaderTabs";
import {
  IconChevronDown,
  IconDots,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import "dayjs/locale/en";

import { dateRange, guestListHeads, guestListTabs } from "../../utils/data";
import { guestListData } from "../../utils/guestListData";
import CustomTable from "../CustomTable";

import { DatePicker } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";

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

const statusColors = {
  booked: "bg-blue-500 bg-opacity-30 text-blue-500",
  canceled: "bg-starColor bg-opacity-30 text-starColor",
  refund: "bg-red-500 bg-opacity-30 text-red-500",
};

const GuestList = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, cx } = useStyles();
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [customRange, setCustomRange] = useState([]);
  const [fullDate, setFullDate] = useState([]);
  const [activeTab, setActiveTab] = useState(guestListTabs[0].name);
  const [selection, setSelection] = useState(["1"]);
  const [sortedData, setSortedData] = useState(guestListData);
  const [initialValue, setInitialValue] = useState(null);
  const [valuesPerPage, setValuesPerPage] = useState(null);

  useEffect(() => {
    setFullDate([formatDateFunc(-30), formatDateFunc(null)]);
  }, []);

  useEffect(() => {
    setCustomRange([dayjs(fullDate[0]).toDate(), dayjs(fullDate[1]).toDate()]);
  }, [fullDate]);

  const formatDateFunc = (set, cusDate = new Date()) => {
    let date = dayjs(cusDate);
    if (set == "first") {
      date = date.startOf("month");
    } else if (set == "last") {
      date = date.endOf("month");
    } else if (set == "firstofLastM") {
      date = date.subtract(1, "month").startOf("month");
    } else if (set == "lastofLastM") {
      date = date.subtract(1, "month").endOf("month");
    } else if (set) {
      date = date.set("D", new Date().getDate() + set);
    }
    const formattedDate = date.format("D MMMM YYYY");

    return formattedDate;
  };

  const rows = sortedData
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
            <Flex className="gap-3" justify={"start"} align={"center"}>
              <Avatar src={item.avatar} size={50} />
              <Flex direction={"column"} gap={0}>
                <Text fz="sm" fw={500} c={dark ? "#AA8453" : "#1B1B1B"}>
                  {item.name}
                </Text>
                <Text
                  c="dimmed"
                  className="text-xs whitespace-nowrap text-red-500"
                >
                  {item.guestId}
                </Text>
              </Flex>
            </Flex>
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
              <Button
                c={"dimmed"}
                className={`${
                  dark
                    ? "bg-gray-700 hover:bg-gray-700"
                    : "bg-gray-300 hover:bg-gray-300"
                } hover:bg-opacity-80`}
              >
                {item.specialRequest}
              </Button>
            </Text>
          </td>
          <td>
            <Text fz="sm" c="dimmed">
              {item.roomType}
            </Text>
          </td>
          <td>
            <Badge
              size="lg"
              radius={"xs"}
              className={statusColors[item.status.toLowerCase()]}
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

  const formatCustomRange = () => {
    const formattedDate = customRange
      .map((date) => {
        if (date === null) {
          return dayjs(customRange[0]).format("MM/D/YYYY");
        }
        return dayjs(date).format("MM/D/YYYY");
      })
      .join(" - ");

    return formattedDate;
  };

  const checkIsActive = (date) => {
    const dateArr = [formatDateFunc(date[0]), formatDateFunc(date[1])];
    const customRangeArr = [
      formatDateFunc(null, customRange[0]),
      formatDateFunc(null, customRange[1]),
    ];

    if (JSON.stringify(dateArr) == JSON.stringify(customRangeArr)) {
      return true;
    } else {
      return false;
    }
  };

  const mediumScreen = useMediaQuery("(min-width: 640px)");

  return (
    <Layout>
      <Box className="lg:p-10 p-2">
        <ListHeaderTabs
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          Tabs={guestListTabs}
          path={"/"}
          isGuestList
        >
          <Menu
            onChange={(e) => setShowMenuDropdown(e)}
            opened={showMenuDropdown}
            transitionProps={{ duration: 0, transition: "pop" }}
            withArrow
            position="bottom-end"
            withinPortal
            classNames={{ item: "w-[120px]" }}
          >
            <Menu.Target onClick={() => setShowMenuDropdown(true)}>
              <Button
                rightIcon={
                  <IconChevronDown size="1rem" className="text-white" />
                }
                h={mediumScreen ? 40 : 37}
                className="bg-primary hover:bg-primary hover:bg-opacity-80"
              >
                {fullDate.join(" - ")}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <div className="flex justify-center items-start">
                <div className="">
                  {dateRange.map(({ name, dateFormat }, index) => (
                    <Menu.Item
                      key={index}
                      onClick={() => {
                        setFullDate([
                          formatDateFunc(dateFormat[0]),
                          formatDateFunc(dateFormat[1]),
                        ]);
                        setShowMenuDropdown(false);
                      }}
                      className={`w-[150px] ${
                        checkIsActive(dateFormat) &&
                        "bg-primary hover:bg-primary"
                      } ${dark ? "text-white" : "text-gray-400"} `}
                    >
                      {name}
                    </Menu.Item>
                  ))}
                  {/* <div
                    onClick={() => setShowCalendar(true)}
                    className={`w-full py-[10px] px-3 text-sm text-start rounded relative cursor-pointer ${
                      dark
                        ? "text-white hover:bg-[#383A40]"
                        : "text-gray-400 hover:bg-[#F1F3F5]"
                    }`}
                  >
                    Custom Range
                  </div> */}
                  <Menu.Item
                    onClick={() => setShowCalendar(true)}
                    className={`w-[150px] ${
                      dark ? "text-white" : "text-gray-400"
                    } `}
                    closeMenuOnClick={false}
                  >
                    Custom Range
                  </Menu.Item>
                </div>
                {showCalendar && (
                  <div className=" border-l border-gray-600 border-opacity-20 p-3 flex justify-center h-full">
                    <DatePicker
                      allowSingleDateInRange
                      value={customRange}
                      onChange={setCustomRange}
                      type="range"
                    />
                  </div>
                )}
              </div>
              {showCalendar && (
                <div className="w-full border-t border-gray-600 border-opacity-20 p-2 flex justify-end items-center gap-3">
                  <div
                    className={`text-sm ${
                      dark ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {formatCustomRange()}
                  </div>
                  <button
                    onClick={() => {
                      setShowCalendar(false);
                      setShowMenuDropdown(false);
                    }}
                    className={`text-sm ${
                      dark ? "text-white" : "text-gray-400"
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    disabled={customRange[1] == null}
                    onClick={() => {
                      setFullDate([
                        formatDateFunc(null, customRange[0]),
                        formatDateFunc(null, customRange[1]),
                      ]);
                      setShowCalendar(false);
                      setShowMenuDropdown(false);
                    }}
                    className={`bg-primary px-2 py-1 text-sm rounded  text-white ${
                      customRange[1] == null && "bg-opacity-60"
                    }`}
                  >
                    Apply
                  </button>
                </div>
              )}
            </Menu.Dropdown>
          </Menu>
        </ListHeaderTabs>
        <CustomTable
          data={guestListData}
          heads={guestListHeads}
          rows={rows}
          sortedData={sortedData}
          setSortedData={setSortedData}
          selection={selection}
          setSelection={setSelection}
          setInitialValue={setInitialValue}
          setValuesPerPage={setValuesPerPage}
          tab={{ activeTab, all: "All Guest", type: "status" }}
        >
          {rows}
        </CustomTable>
      </Box>
    </Layout>
  );
};

export default GuestList;
