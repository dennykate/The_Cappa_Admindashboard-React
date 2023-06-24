import React, { useEffect, useState } from "react";
import Layout from "../Layout";

import {
  ActionIcon,
  Checkbox,
  Badge,
  Box,
  Group,
  Image,
  Text,
  createStyles,
  rem,
  useMantineColorScheme,
  Menu,
} from "@mantine/core";
import CustomTable from "../CustomTable";
import { roomListData, roomListHeads } from "../../utils/data";
import ListHeaderTabs from "../ListHeaderTabs";
import { roomListTabs } from "../../utils/data";

import { IconDots, IconEdit, IconTrash } from "@tabler/icons-react";
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

const bedTypeColors = {
  familybed: "bg-blue-500 bg-opacity-30 text-blue-500",
  singlebed: "bg-starColor bg-opacity-30 text-starColor",
  doublebed: "bg-[#6A64B9] bg-opacity-30 text-[#6A64B9]",
};

const activeColors = {
  active: "bg-[#4CAF4F] bg-opacity-30 text-[#4CAF4F]",
  booked: "bg-red-500 bg-opacity-30 text-red-500",
};
const RoomList = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, cx } = useStyles();
  const [activeTab, setActiveTab] = useState(roomListTabs[0].name);
  const [selection, setSelection] = useState(["1"]);
  const [sortedData, setSortedData] = useState(roomListData);
  const [initialValue, setInitialValue] = useState(null);
  const [valuesPerPage, setValuesPerPage] = useState(null);
  console.log(activeTab);

  const rows = sortedData
    .filter((data) => filterStatus(data, activeTab, "All Rooms", "status"))
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
            <Image src={item.image} width={120} radius={5} />
          </td>
          <td>
            <Text fz="sm" fw={500} c={dark ? "AA8453" : "#1B1B1B"}>
              {item.roomNumber}
            </Text>
          </td>
          <td>
            <Badge
              size="lg"
              radius={"xs"}
              className={
                bedTypeColors[item.bedType.toLowerCase().replace(" ", "")]
              }
            >
              {item.bedType}
            </Badge>
          </td>
          <td>
            <Text fz="sm" c={"dimmed"}>
              {item.roomType}
            </Text>
          </td>
          <td className="truncate">
            <Text size="sm" c={"dimmed"}>
              {item.floor}
            </Text>
          </td>
          <td>
            <Text fz="sm" c="dimmed">
              {item.facilities}
            </Text>
          </td>
          <td>
            <Text fz="sm" c="dimmed">
              {item.rate}
            </Text>
          </td>

          <td>
            <Badge
              size="lg"
              radius={"xs"}
              className={activeColors[item.status.toLowerCase()]}
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
          Tabs={roomListTabs}
          path={"/"}
        />
        <CustomTable
          data={roomListData}
          heads={roomListHeads}
          rows={rows}
          sortedData={sortedData}
          setSortedData={setSortedData}
          selection={selection}
          setSelection={setSelection}
          setInitialValue={setInitialValue}
          setValuesPerPage={setValuesPerPage}
        />
      </Box>
    </Layout>
  );
};

export default RoomList;
