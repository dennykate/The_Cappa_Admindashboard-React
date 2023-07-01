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
import { useMediaQuery } from "@mantine/hooks";

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
  const mediumScreen = useMediaQuery("(min-width: 640px)");

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
            className={`pb-2 sm:px-5 px-2 border-b  ${
              activeTab === name
                ? "border-b-2 border-primary text-primary"
                : "border-gray-400"
            } sm:text-base text-sm font-medium`}
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
                size={mediumScreen ? "md" : "xs"}
                c={"dimmed"}
                onClick={() => navigate(path)}
                leftIcon={<IconPlus size={mediumScreen ? "1.2rem" : "1rem"} />}
                className="border-primary hover:bg-transparent hover:border-opacity-80 h-[40px]"
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
              ` ${mediumScreen?"w-[120px] h-[40px]":"w-[100px] h-[30px]"} border text-[14px] border-primary bg-transparent  focus:border-primary text-[#868E96] font-semibold font-barlow`,
          }}
        />
      </Group>
    </Flex>
  );
};

export default ListHeaderTabs;
