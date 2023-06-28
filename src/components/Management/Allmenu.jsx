import React, { useState } from "react";
import Layout from "../Layout";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Checkbox,
  useMantineColorScheme,
  createStyles,
  rem,
  Text,
  ActionIcon,
} from "@mantine/core";
import ListHeaderTabs from "../ListHeaderTabs";
import { menuHeads, menuListData, menuTabs } from "../../utils/menuData";
import CustomTable from "../CustomTable";
import { IconPencil, IconTrash } from "@tabler/icons-react";
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

const Allmenu = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, cx } = useStyles();
  const [activeTab, setActiveTab] = useState(menuTabs[0].name);
  const [selection, setSelection] = useState(["1"]);
  const [sortedData, setSortedData] = useState(menuListData);
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
            <Text fz="sm" fw={500} c={dark ? "#AA8453" : "#1B1B1B"}>
              {item.name}
            </Text>
          </td>

          <td>
            <Text fz="sm" c={"dimmed"}>
              {item.description}
            </Text>
          </td>
          <td className="">
            <Text size="sm" c={"dimmed"}>
              {item.price} $
            </Text>
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
    <Layout>
      <Box className="p-10">
        <ListHeaderTabs
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          Tabs={menuTabs}
          path={"/"}
        />
        <CustomTable
          data={menuListData}
          heads={menuHeads}
          rows={rows}
          sortedData={sortedData}
          setSortedData={setSortedData}
          selection={selection}
          setSelection={setSelection}
          setInitialValue={setInitialValue}
          setValuesPerPage={setValuesPerPage}
          tab={{ activeTab, all: null, type: "category" }}
        />
      </Box>
    </Layout>
  );
};

export default Allmenu;
