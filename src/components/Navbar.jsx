import {
  createStyles,
  Header,
  Group,
  // UnstyledButton,
  Text,
  // ThemeIcon,
  Box,
  Burger,
  rem,
  useMantineTheme,
  Title,
  Flex,
} from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";

import { Avatar } from "@mantine/core";

import {
  // IconNotification,
  // IconCode,
  // IconBook,
  // IconChartPie3,
  // IconFingerprint,
  // IconCoin,
  IconBell,
  IconMessage,
  // IconBookmarkEdit,
  // IconBookUpload,
  IconUserShare,
  IconLogout,
  // IconChevronDown,
} from "@tabler/icons-react";
import { ActionToggle } from "./DarkandLightTheme";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Menu } from "@mantine/core";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
// import {
//   IconSettings,
//   IconSearch,
//   IconPhoto,
//   IconMessageCircle,
//   IconTrash,
//   IconArrowsLeftRight,
// } from "@tabler/icons-react";
// import { useState } from "react";

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  naviconLink: {
    width: rem(35),
    height: rem(35),
    borderRadius: theme.radius.lg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },
  // "#AA8453"
  naviconLinkActive: {
    "&,&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
      color: "#AA8453",
    },
  },

  title: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.dark[5],
  },
}));

// const mockdata = [];

export function HeaderMegaMenu({
  menuSelect,
  navbarSide,
  handleIsOpen,
  isOpen,
}) {
  // const [themecolor, setTheme] = useState("light");
  // const toggleTheme = () =>
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  const { colorScheme } = useMantineTheme();
  const navigate = useNavigate();

  // const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
  //   useDisclosure(false);
  // const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  // const links = mockdata.map((item) => (
  //   <UnstyledButton
  //     className={classes.subLink}
  //     key={item.title}
  //   ></UnstyledButton>
  // ));

  return (
    <Box>
      <Header
        height={60}
        px="sm"
        style={{
          maxWidth: navbarSide(),
          margin: "0 0 0 auto",
          // transition: "all 0.5s",
          backgroundColor: colorScheme === "dark" ? "#1B1B1B" : "white",
        }}
      >
        <Group position="apart" sx={{ height: "100%" }}>
          <Flex
            checked={isOpen}
            style={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => {
              handleIsOpen();
            }}
          >
            {isOpen ? (
              <Burger
                size={25}
                color={colorScheme === "dark" ? "#aa8453" : "#222222"}
              />
            ) : (
              <MdKeyboardArrowRight
                size={35}
                color={colorScheme === "dark" ? "#aa8453" : "#222222"}
              />
            )}

            <div>
              <Title order={4} fw={500} pl={3} pt={2} className={classes.title}>
                {menuSelect}
              </Title>
            </div>
          </Flex>

          <Group className={classes.hiddenMobile} mr="xl">
            <Group className={classes.naviconLink}>
              <IconBell
                size={24}
                strokeWidth={1}
                color={colorScheme === "dark" ? "#ffffff" : "black"}
              />
            </Group>

            <Group className={classes.naviconLink}>
              <IconMessage
                // className={classes.naviconLinkActive}
                size={24}
                strokeWidth={1}
                color={colorScheme === "dark" ? "#ffffff" : "black"}
              />
            </Group>

            <ActionToggle />
            {/* Profile  */}
            <Menu shadow="xl" width={180}>
              <Menu.Target>
                <Avatar
                  radius="lg"
                  size="sm"
                  color="dark"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                />
              </Menu.Target>

              <Menu.Dropdown
                style={{
                  backgroundColor: colorScheme === "dark" ? "#282828" : "white",
                }}
              >
                <Menu.Item>
                  <Flex>
                    <Avatar
                      radius="lg"
                      size="sm"
                      color="dark"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                    />
                    <Text pl={15}> Profile</Text>
                  </Flex>
                </Menu.Item>
                <Menu.Divider />

                <Menu.Item icon={<IconUserShare size={14} />}>
                  Manage Account
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    Cookies.remove("isLogin");
                    navigate("/login");
                  }}
                  color="red"
                  icon={<IconLogout size={14} />}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
