import React, { useState } from "react";
import { data } from "../utils/data";
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  Checkbox,
  Avatar,
  Flex,
  Badge,
  ActionIcon,
  Anchor,
  Box,
  Tooltip,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconPencil,
  IconTrash,
  IconBookmarkPlus,
  IconPlus,
  IconRefresh,
} from "@tabler/icons-react";
import PaginationPart from "./PaginationPart";
import { HiOutlinePlus, HiPlus } from "react-icons/hi2";
import { MdOutlineRefresh } from "react-icons/md";
import { exportExcel } from "../utils/functions";

const genderColors = {
  male: "bg-[#4CAF4F] bg-opacity-30 text-[#4CAF4F]",
  female: "bg-[#6A64B9] bg-opacity-30 text-[#6A64B9]",
};

const paymentColors = {
  paid: "bg-[#4CAF4F] bg-opacity-30 text-[#4CAF4F]",
  unpaid: "bg-red-500 bg-opacity-30 text-red-500",
};
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
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

export default function TableComponent({ dark }) {
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState(1);
  const [active, setActive] = useState("prev");

  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["1"]);
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

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
            <Avatar size={26} src={item.avatar} radius={26} />
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
              {item.arrive}
            </Text>
          </td>
          <td>
            <Text fz="sm" c="dimmed">
              {item.depart}
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
            <Group spacing={0} position="left">
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
            </Group>
          </td>
        </tr>
      );
    });

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );

  return (
    <>
      <Flex
        justify={"space-between"}
        align={"center"}
        px={30}
        py={10}
        className={`${dark ? "bg-[#181818]" : "bg-primary"} rounded-t-lg`}
      >
        <Group position="apart">
          {/* <Text className="text-base text-center text-primary font-medium">
            All Booking
          </Text> */}
          <TextInput
            placeholder="Search ..."
            icon={
              <IconSearch
                size="1.2rem"
                stroke={1.7}
                className={
                  dark
                    ? "text-[rgb(170,132,83)]"
                    : "text-[rgb(255,255,255,0.8)]"
                }
              />
            }
            value={search}
            onChange={handleSearchChange}
            sx={{
              input: {
                width: "400px",
                height: "40px",
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
        <Group className="flex gap-3">
          <Tooltip label="ADD" color="dark" position="bottom-end" fz={"xs"}>
            <button
              className={`w-[40px] h-[40px] ${
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
              className={`w-[40px] h-[40px] ${
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
              onClick={exportExcel}
              className="w-9 h-9 flex justify-center items-center"
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
      <Box
        className={`rounded-b-lg shadow-lg  ${
          dark ? "bg-[#1B1B1B]" : "bg-[#ffffff]"
        }`}
        px={30}
      >
        <Table
          horizontalSpacing="md"
          verticalSpacing="xs"
          miw={700}
          sx={{ tableLayout: "fixed" }}
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
              <th>
                <Text fz="sm" fw={500} c="#AA8453">
                  Image
                </Text>
              </th>
              <Th
                sorted={sortBy === "name"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("name")}
              >
                Name
              </Th>
              <Th
                sorted={sortBy === "gender"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("gender")}
              >
                Gender
              </Th>
              <Th
                sorted={sortBy === "mobile"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("mobile")}
              >
                Mobile
              </Th>
              <Th
                sorted={sortBy === "email"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("email")}
              >
                Email
              </Th>
              <Th
                sorted={sortBy === "arrive"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("arrive")}
              >
                Arrive
              </Th>
              <Th
                sorted={sortBy === "depart"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("depart")}
              >
                Depart
              </Th>
              <Th
                sorted={sortBy === "roomType"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("roomType")}
              >
                Room Type
              </Th>
              <Th
                sorted={sortBy === "payment"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("payment")}
              >
                Payment
              </Th>
              <th>
                <Text fz="sm" fw={500} c="#AA8453">
                  Actions
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
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
    </>
  );
}
