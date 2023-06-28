import React, { useState } from "react";
import Layout from "../Layout";
import { conciergeListTabs } from "../../utils/data";
import {
  Button,
  useMantineColorScheme,
  Box,
  createStyles,
  rem,
  Checkbox,
  Image,
  Text,
  Badge,
  Flex,
  Avatar,
  Menu,
  ActionIcon,
} from "@mantine/core";

import ListHeaderTabs from "../ListHeaderTabs";
import {
  conciergeListData,
  conciergeListHeads,
} from "../../utils/conciergeListData";
import CustomTable from "../CustomTable";
import { filterStatus } from "../../utils/functions";
import { IconDots, IconEdit, IconTrash } from "@tabler/icons-react";

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

const activeColors = {
  active: "bg-[#4CAF4F] bg-opacity-30 text-[#4CAF4F]",
  inactive: "bg-red-500 bg-opacity-30 text-red-500",
};

const ConciergeList = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, cx } = useStyles();
  const [activeTab, setActiveTab] = useState(conciergeListTabs[0].name);
  const [selection, setSelection] = useState(["1"]);
  const [sortedData, setSortedData] = useState(conciergeListData);
  const [initialValue, setInitialValue] = useState(null);
  const [valuesPerPage, setValuesPerPage] = useState(null);

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
            <Flex justify={"start"} align={"center"} gap={"md"}>
              <Avatar src={item.avatar} size={50} radius={5} />
              <Flex direction="column" className="gap-0">
                <Text fz="sm" fw={500} c={dark ? "#AA8453" : "#1B1B1B"}>
                  {item.name}
                </Text>
                <Text
                  fz="xs"
                  fw={500}
                  c={dark ? "AA8453" : "#1B1B1B"}
                  className="whitespace-nowrap text-red-500"
                >
                  {item.guestId}
                </Text>
                <Text
                  fz="xs"
                  fw={500}
                  c={dark ? "AA8453" : "#1B1B1B"}
                  className="whitespace-nowrap"
                >
                  {item.joinDate}
                </Text>
              </Flex>
            </Flex>
          </td>

          <td>
            <Text fz="sm" c={"dimmed"}>
              {item.jobDescription}
            </Text>
          </td>
          <td>
            <Text size="sm" c={"dimmed"}>
              {item.schedule}
            </Text>
          </td>
          <td>
            <Text
              fz="sm"
              c="dimmed"
              className="whitespace-nowrap text-starColor"
            >
              {item.contact}
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
          Tabs={conciergeListTabs}
          path={"/"}
        />

        <CustomTable
          data={conciergeListData}
          heads={conciergeListHeads}
          rows={rows}
          sortedData={sortedData}
          setSortedData={setSortedData}
          selection={selection}
          setSelection={setSelection}
          setInitialValue={setInitialValue}
          setValuesPerPage={setValuesPerPage}
          tab={{ activeTab, all: "All Employee", type: "status" }}
        />
      </Box>
    </Layout>
  );
};

export default ConciergeList;
