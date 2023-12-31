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
  Tooltip,
  Modal,
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
  IconLock,
  // IconChevronDown,
} from "@tabler/icons-react";
import { ActionToggle } from "./DarkandLightTheme";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Menu } from "@mantine/core";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import ChangePassword from "./ChangePassword";

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
    "&:hover": {
      color: "#AA8453",
    },
  },

  title: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.dark[5],
    textTransform: "capitalize",
  },
}));

// const mockdata = [];

export function HeaderMegaMenu({
  menuSelect,
  navbarSide,
  handleIsOpen,
  isOpen,
  profile,
}) {
  const [opened, { open, close }] = useDisclosure(false);
  // const [opened, setOpened] = useState(false);
  const { pathname } = useLocation();
  const { colorScheme } = useMantineTheme();
  const navigate = useNavigate();

  const { classes, theme } = useStyles();

  const pathToName = (path) => {
    const pathArr = path.split("/");
    const name = pathArr[pathArr.length - 1].replace("-", " ");
    return name;
  };

  return (
    <Box>
      <Header
        height={60}
        px="sm"
        style={{
          maxWidth: navbarSide(),
          margin: "0 0 0 auto",
          transition: "width 1.5s",
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
            align="center"
            onClick={(e) => {
              handleIsOpen(e);
            }}
          >
            {isOpen ? (
              <Burger
                size={25}
                color={colorScheme === "dark" ? "#aa8453" : "#aa8453"}
                className="lg:block hidden"
              />
            ) : (
              <MdKeyboardArrowRight
                size={35}
                color={colorScheme === "dark" ? "#aa8453" : "#aa8453"}
                className="lg:block hidden"
              />
            )}

            {isOpen ? (
              <MdKeyboardArrowRight
                size={25}
                color={colorScheme === "dark" ? "#aa8453" : "#aa8453"}
                className="lg:hidden block"
              />
            ) : (
              <Burger
                size={25}
                color={colorScheme === "dark" ? "#aa8453" : "#aa8453"}
                className="lg:hidden block"
              />
            )}

            <div>
              <Title order={4} fw={400} pl={10} className={classes.title}>
                {pathToName(pathname)}
              </Title>
            </div>
          </Flex>

          <Group className={classes.hiddenMobile} mr="xl">
            <Tooltip label="notification">
              <Group className={classes.naviconLink}>
                <IconBell
                  size={24}
                  strokeWidth={1.5}
                  className={classes.naviconLinkActive}
                />
              </Group>
            </Tooltip>
            <Tooltip label="chat">
              <Group className={classes.naviconLink}>
                <IconMessage
                  className={classes.naviconLinkActive}
                  size={24}
                  strokeWidth={1.5}
                />
              </Group>
            </Tooltip>

            <ActionToggle />
            {/* Profile  */}
            <Menu shadow="xl" width={180}>
              <Menu.Target className="cursor-pointer">
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
                    <Avatar radius="lg" size="sm" color="dark" src={profile} />
                    <Text pl={15}> Profile</Text>
                  </Flex>
                </Menu.Item>
                <Menu.Divider />

                <Menu.Item onClick={open} icon={<IconLock size={14} />}>
                  Change Password
                </Menu.Item>

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
      {/* change password modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="Change Password"
        centered
        classNames={{
          title: "text-2xl",
          content: `${
            theme.colorScheme === "dark" ? "bg-[#1B1B1B]" : "bg-[#F8F5F0]"
          }`,
          header: `${
            theme.colorScheme === "dark" ? "bg-[#1B1B1B]" : "bg-[#F8F5F0]"
          } border-b border-gray-600 border-opacity-20`,
        }}
      >
        <ChangePassword close={close} />
      </Modal>
    </Box>
  );
}
