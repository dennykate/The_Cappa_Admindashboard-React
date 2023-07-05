import {
  Box,
  Center,
  Checkbox,
  Flex,
  Group,
  Table,
  Text,
  TextInput,
  Tooltip,
  UnstyledButton,
  createStyles,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import {
  IconChevronDown,
  IconChevronUp,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconSelector,
} from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import PaginationPart from "./PaginationPart";
import { exportExcel, filterStatus } from "../utils/functions";
import { useMediaQuery } from "@mantine/hooks";

function filterData(data, search) {
  const query = search.toLowerCase().trim();

  //   console.log(data[0]);

  return data.filter((item) =>
    keys(data[0]).some(
      (key) => key != "id" && item[key].toLowerCase().includes(query)
    )
  );
}

function sortData(data, payload) {
  const { sortBy, tab } = payload;

  if (!sortBy) {
    return filterData(
      data.filter((data) => filterStatus(data, tab)),
      payload.search
    );
  }

  const sortByData = [...data].sort((a, b) => {
    if (payload.reversed) {
      return b[sortBy].localeCompare(a[sortBy]);
    }

    return a[sortBy].localeCompare(b[sortBy]);
  });

  return filterData(
    sortByData.filter((data) => filterStatus(data, tab)),
    payload.search
  );
}

const CustomTable = ({
  data,
  rows,
  heads,
  setSortedData,
  sortedData,
  selection,
  setSelection,
  setInitialValue,
  setValuesPerPage,
  tab,
}) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState(1);
  const [active, setActive] = useState("prev");
  const [search, setSearch] = useState("");

  const initialValue = parseInt(limit) * (page - 1);
  const valuesPerPage = parseInt(limit) * page;

  const nextPageHandler = () => {
    if (page * limit < sortedData.length) {
      setPage(page + 1);
      setActive("next");
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage(page - 1);
      setActive("prev");
    }
  };

  useEffect(() => {
    setInitialValue(initialValue);
    setValuesPerPage(valuesPerPage);
  }, [initialValue, valuesPerPage]);

  useEffect(() => {
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search, tab })
    );

    if (sortedData.slice(initialValue, valuesPerPage).length == 0) setPage(1);
  }, [tab.activeTab]);

  useEffect(() => {
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search, tab })
    );
  }, [data]);

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
        tab,
      })
    );
  };

  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search, tab }));
  };

  const mediumScreen = useMediaQuery("(min-width: 640px)");

  return (
    <Box
      className={`rounded-lg shadow-lg  ${
        dark ? "bg-[#1B1B1B]" : "bg-[#ffffff]"
      } overflow-hidden`}
    >
      <Flex
        direction="row"
        justify={"space-between"}
        align={"center"}
        px={mediumScreen ? 30 : 10}
        py={10}
        className={`${dark ? "bg-[#181818]" : "bg-primary"} ${
          mediumScreen ? "gap-0" : "gap-5"
        }`}
      >
        <Group position="apart">
          {/* <Text className="text-base text-center text-primary font-medium">
            All Booking
          </Text> */}
          <TextInput
            placeholder="Search ..."
            icon={
              <IconSearch
                size={mediumScreen ? "1.2rem" : "1rem"}
                stroke={1.7}
                className={
                  dark
                    ? "text-[rgb(170,132,83)]"
                    : "text-[rgb(255,255,255,0.8)]"
                }
              />
            }
            value={search}
            // onChange={(e) => setSearch(e.target.value)}
            onChange={handleSearchChange}
            sx={{
              input: {
                width: `${mediumScreen ? "400px" : "200px"}`,
                height: `${mediumScreen ? "40px" : "20px"}`,
                color: "gray",
                borderColor: dark ? "rgb(170,132,83)" : "rgb(255,255,255,0.5)",
                backgroundColor: "transparent",
              },
              ["& .mantine-TextInput-input::placeholder"]: {
                color: dark ? "rgb(170,132,83)" : "rgb(255,255,255,0.8)",
                fontSize: "16px",
              },
            }}
          />
        </Group>
        <Group className={`flex ${mediumScreen ? " gap-3" : "gap-2"} `}>
          <Tooltip label="ADD" color="dark" position="bottom-end" fz={"xs"}>
            <button
              className={`${
                mediumScreen ? "w-[40px] h-[40px]" : "w-[30px] h-[30px]"
              } ${
                dark ? "bg-primary" : "bg-white"
              } flex justify-center items-center group hover:bg-opacity-100 active:bg-opacity-70 bg-opacity-10 rounded-[10px] transition-all duration-300 ease-in-out`}
            >
              {/* <HiPlus className="text-xl" /> */}
              <IconPlus
                className={
                  dark ? "text-white" : "text-white group-hover:text-primary"
                }
              />
            </button>
          </Tooltip>
          <Tooltip label="REFRESH" color="dark" position="bottom-end" fz={"xs"}>
            <button
              onClick={() => setPage(1)}
              className={`${
                mediumScreen ? "w-[40px] h-[40px]" : "w-[30px] h-[30px]"
              }  ${
                dark ? "bg-primary" : "bg-white"
              } flex justify-center items-center group hover:bg-opacity-100  active:bg-opacity-70 bg-opacity-10 rounded-[10px] transition-all duration-300 ease-in-out`}
            >
              {/* <MdOutlineRefresh className="text-xl" /> */}
              <IconRefresh
                className={
                  dark ? "text-white" : "text-white group-hover:text-primary"
                }
              />
            </button>
          </Tooltip>
          <Tooltip label="XLSX" color="dark" position="bottom-end" fz={"xs"}>
            <button
              onClick={() => exportExcel(data, "table-data")}
              className={`${
                mediumScreen ? "w-9 h-9" : "w-7 h-7"
              }  flex justify-center items-center`}
            >
              <img
                className="excel-btn"
                src="https://www.einfosoft.com/templates/admin/spiceangular/source/light/assets/images/icons/xlsx.png"
                alt=""
              />
            </button>
          </Tooltip>
        </Group>
      </Flex>

      <Box className="overflow-x-auto customScrollbar">
        <Table
          horizontalSpacing="md"
          verticalSpacing="xs"
          miw={700}

          // sx={{ tableLayout: "fixed" }}
        >
          <thead>
            <tr>
              <th style={{ width: rem(40) }}>
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === data.length}
                  indeterminate={
                    selection.length > 0 && selection.length !== data.length
                  }
                  transitionDuration={0}
                />
              </th>
              {heads?.map(({ name, sortType }, index) =>
                sortType ? (
                  <Th
                    key={index}
                    sorted={sortBy === sortType}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting(sortType)}
                  >
                    {name}
                  </Th>
                ) : (
                  <th key={index}>
                    <Text fz="sm" fw={500} c="#AA8453">
                      {name}
                    </Text>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {rows?.length > 0 ? (
              rows
            ) : (
              <tr>
                <td colSpan={Object.keys(data[0]).length}>
                  <Text weight={500} align="center">
                    Nothing found
                  </Text>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Box>
      <PaginationPart
        limit={limit}
        setLimit={setLimit}
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
        initialValue={initialValue}
        valuesPerPage={valuesPerPage}
        page={page}
        setPage={setPage}
        data={sortedData}
        active={active}
      />
    </Box>
  );
};

export default CustomTable;

const useStyles = createStyles((theme) => ({
  th: {
    padding: "0 !important",
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

function Th({ children, reversed, sorted, onSort }) {
  const { classes } = useStyles();
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Flex justify="space-between" align="center">
          <Text fw={500} fz="sm" c={"#AA8453"}>
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size="0.9rem" stroke={1.5} />
          </Center>
        </Flex>
      </UnstyledButton>
    </th>
  );
}
