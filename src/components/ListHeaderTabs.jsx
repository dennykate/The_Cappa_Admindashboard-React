import {
  Box,
  Button,
  Flex,
  Group,
  Menu,
  Text,
  Select,
  useMantineColorScheme,
} from "@mantine/core";

import { IconChevronDown, IconChevronUp, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListHeaderTabs = ({
  activeTab,
  setActiveTab,
  Tabs,
  path,
  children,
  isGuestList,
  isReviewList,
}) => {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const [isOpen, setIsOpen] = useState(false);

  const dark = colorScheme === "dark";
  return (
    <Flex className="pb-5 sm:flex-row flex-col gap-5 sm:justify-between">
      <Group className="gap-0">
        {Tabs.map(({ name }, index) => (
          <Text
            component="button"
            c={"dimmed"}
            onClick={() => setActiveTab(name)}
            className={`pb-2 px-5 border-b  ${
              activeTab === name
                ? "border-b-2 border-primary text-primary"
                : "border-gray-400"
            } text-md font-medium`}
            key={index}
          >
            {name}
          </Text>
        ))}
      </Group>
      <Group position="apart">
        {isGuestList
          ? children
          : !isReviewList && (
              <Button
                c={"dimmed"}
                onClick={() => navigate(path)}
                leftIcon={<IconPlus />}
                className="border-primary  hover:bg-transparent hover:border-opacity-80 h-[40px]"
              >
                Add New
              </Button>
            )}

        <Select
          defaultValue="Newest"
          data={[
            { value: "Newest", label: "Newest" },
            { value: "Oldest", label: "Oldest" },
          ]}
          onDropdownOpen={() => setIsOpen(true)}
          onDropdownClose={() => setIsOpen(false)}
          rightSection={
            isOpen ? (
              <IconChevronUp size="1rem" className="text-gray-500" />
            ) : (
              <IconChevronDown size="1rem" className="text-gray-500" />
            )
          }
          styles={{
            rightSection: { pointerEvents: "none" },
            item: {
              // applies styles to selected item
              "&[data-selected]": {
                "&, &:hover": {
                  backgroundColor: "#AA8453",
                },
              },
            },
          }}
          classNames={{
            input:
              "border text-[14px] border-primary bg-transparent w-[100px] h-[40px] focus:border-primary text-[#868E96] font-semibold font-barlow",
          }}
        />
      </Group>
    </Flex>
  );
};

export default ListHeaderTabs;
