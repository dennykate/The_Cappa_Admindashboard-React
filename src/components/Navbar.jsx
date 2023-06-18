import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Title,
  Flex,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import { ColorSchemeProvider } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { Bell } from "tabler-icons-react";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import { ActionToggle } from "./DarkandLightTheme";
import { Menu } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Paper, Switch } from "@mantine/core";
import { BrandWechat } from "tabler-icons-react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

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
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu({ menuSelect, handleSideBarWidth }) {
  const [themecolor, setTheme] = useState("light");
  console.log(menuSelect);
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  const { colorScheme } = useMantineTheme();

  // burger toggle
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    handleSideBarWidth();
  };


  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Flex
            checked={isOpen}
            onClick={() => {
              handleToggle();
            }}
          >
            {isOpen ? (
              <MdKeyboardArrowRight
                size={35}
                color={colorScheme === "dark" ? "#aa8453" : "black"}
              />
            ) : (
              <Burger
                size={25}
                color={colorScheme === "dark" ? "#aa8453" : "black"}
              />
            )}

            <div>
              <Title order={4} pl={3} pt={2} className={classes.title}>
                {menuSelect}
              </Title>
            </div>
          </Flex>

          <Group className={classes.hiddenMobile} mr="xl">
            <Bell
              size={24}
              strokeWidth={1}
              color={colorScheme === "dark" ? "#aa8453" : "black"}
            />

            <BrandWechat
              size={24}
              strokeWidth={1}
              color={colorScheme === "dark" ? "#aa8453" : "black"}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                borderRadius: theme.radius.lg,

                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[4]
                    : theme.colors.blue[6],
              })}
            />

            <ActionToggle />
            {/* Profile  */}
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar
                  radius="lg"
                  size="sm"
                  color="dark"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item icon={<IconSettings size={14} />}>
                  Settings
                </Menu.Item>
                <Menu.Item icon={<IconMessageCircle size={14} />}>
                  Messages
                </Menu.Item>
                <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
                <Menu.Item
                  icon={<IconSearch size={14} />}
                  rightSection={
                    <Text size="xs" color="dimmed">
                      ⌘K
                    </Text>
                  }
                >
                  Search
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
                  Transfer my data
                </Menu.Item>
                <Menu.Item color="red" icon={<IconTrash size={14} />}>
                  Delete my account
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            {/* <Button variant="default">Log in</Button>
            <Button>Sign up</Button> */}
          </Group>
          {/* <ActionToggle></ActionToggle> */}
          {/* <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} /> */}
        </Group>
      </Header>

      {/* <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer> */}
    </Box>
  );
}
