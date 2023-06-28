import React, { useEffect, useState } from "react";
import Layout from "../Layout";

import ReviewCarousel from "../ReviewCarousel";
import {
  ActionIcon,
  Avatar,
  Checkbox,
  Box,
  Flex,
  Menu,
  Text,
  createStyles,
  rem,
  useMantineColorScheme,
  Button,
} from "@mantine/core";
import ListHeaderTabs from "../ListHeaderTabs";
import {
  reviewListData,
  reviewListHeads,
  reviewListTabs,
} from "../../utils/reviewListData";
import CustomTable from "../CustomTable";

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

const Review = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, cx } = useStyles();
  const [data, setData] = useState(reviewListData);
  const [activeTab, setActiveTab] = useState(reviewListTabs[0].name);
  const [selection, setSelection] = useState(["1"]);
  const [sortedData, setSortedData] = useState([]);
  const [initialValue, setInitialValue] = useState(null);
  const [valuesPerPage, setValuesPerPage] = useState(null);

  const onActionHandler = (id, type) => {
    setData(
      data.map((data) => {
        if (data.id === id) {
          data.status = type;
        }

        return data;
      })
    );
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
            </Flex>
          </td>
          <td>
            <Text fz="sm" fw={500} c={dark ? "#AA8453" : "#1B1B1B"} className=" whitespace-nowrap">
              {item.customer}
            </Text>
          </td>
          <td>
            <Text fz="sm" fw={500} c={"red"}>
              {item.orderId}
            </Text>
          </td>

          <td>
            <Text fz="sm" c={"dimmed"}>
              {item.date}
            </Text>
          </td>
          <td className="">
            <Text size="sm" c={"dimmed"}>
              {item.comment}
            </Text>
          </td>
          <td>
            <Flex gap={0}>
              <Button
                p={0}
                mr={15}
                onClick={() => onActionHandler(item.id, "published")}
                c={"green"}
                className="hover:bg-transparent"
              >
                Publish
              </Button>
              <Button
                p={0}
                onClick={() => onActionHandler(item.id, "archieved")}
                c={"red"}
                className="hover:bg-transparent"
              >
                Archieve
              </Button>
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
        <Box className="mb-10">
          <ReviewCarousel dark={dark} />
        </Box>
        <ListHeaderTabs
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          Tabs={reviewListTabs}
          path={"/"}
          isReviewList
        />
        <CustomTable
          data={data}
          heads={reviewListHeads}
          rows={rows}
          sortedData={sortedData}
          setSortedData={setSortedData}
          selection={selection}
          setSelection={setSelection}
          setInitialValue={setInitialValue}
          setValuesPerPage={setValuesPerPage}
          tab={{ activeTab, all: null, type: "status" }}
        />
      </Box>
    </Layout>
  );
};

export default Review;
