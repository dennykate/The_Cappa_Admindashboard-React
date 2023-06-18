import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  Title,
  rem,
  Stack,
  Image,
  Avatar,
  Burger,
  Center,
  useMantineTheme,
  ScrollArea,
} from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconSearch,
  IconDashboard,
  IconDashboardOff,
  IconLayoutDashboard,
  IconList,
  IconListCheck,
  IconUsersGroup,
  IconSwitchHorizontal,
  IconLogout,
  IconNotes,
  IconLock,
  IconPresentationAnalytics,
  IconAdjustments,
  IconFileAnalytics,
  IconUserEdit,
  IconBookmarkEdit,
  IconWritingSign,
  IconBrandBlogger,
  IconWriting,
} from "@tabler/icons-react";

import { LinksGroup } from "./NavbarLinkGroup";
import { Modal, Group, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// import TheCappa from "src/assets/logo.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  aside: {
    flex: `0 0 ${rem(60)}`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `${rem(0.5)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  mainLink: {
    width: rem(44),
    height: rem(44),
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

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  title: {
    boxSizing: "border-box",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: rem(18),
    height: rem(60),
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: rem(60),
    paddingTop: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: rem(44),
    lineHeight: rem(44),

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      color: theme.white,
    },
  },

  //

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },
}));

function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

NavbarLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

const mainLinksMockdata = [
  { icon: IconLayoutDashboard, label: "Dashboard" },
  { icon: IconCalendarStats, label: "List" }, //Room List , Guest List , Conceige List
  { icon: IconUsersGroup, label: "Department" }, //staff
  { icon: IconUser, label: "Account" },
  { icon: IconBookmarkEdit, label: "Management" },
  { icon: IconWriting, label: "Blog and Review" },
  { icon: IconSettings, label: "Settings" },
  { icon: IconSearch, label: "Search" },
];
//mockdata practice

const mockdata_dashboard = [
  {
    label: "Dashboard",
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Chart", link: "/" },
      { label: "Calendar", link: "/" },
    ],
  },
];

const mockdata_list = [
  {
    label: "List",
    initiallyOpened: true,
    links: [
      { label: "Room List", link: "/" },
      { label: "Guest List", link: "/" },
      { label: "Concierge List", link: "/" },
      { label: "Review", link: "/" },
    ],
  },
];

const mockdata_Department = [
  {
    label: "Departments",
    initiallyOpened: true,
    links: [
      { label: "All Departments", link: "/" },
      { label: "Add Departments", link: "/" },
      { label: "Edit Departments", link: "/" },
    ],
  },
  {
    label: "Staff",
    links: [
      { label: "All Staff", link: "/" },
      { label: "Add Staff", link: "/" },
      { label: "Edit Staff", link: "/" },
      { label: "About Staff", link: "/" },
    ],
  },
  {
    label: "Team",
    links: [
      { label: "All Team", link: "/" },
      { label: "Add Team", link: "/" },
      { label: "Edit Team", link: "/" },
      { label: "About Team", link: "/" },
    ],
  },
];

const mockdata_Account = [
  {
    label: "Apps",
    initiallyOpened: true,
    links: [
      { label: "Profile", link: "/" },
      { label: "Post Details", link: "/" },
      { label: "Calendar", link: "/" },
      // {
      //   label: "Email",
      //   links: [
      //     { label: "Inbox", link: "/" },
      //     { label: "Compose", link: "/" },
      //     { label: "Read", link: "/" },
      //   ],
      // },
    ],
  },
];
const mockdata_Management = [
  {
    label: "Booking",
    initiallyOpened: true,
    links: [
      { label: "All Booking", link: "/" },
      { label: "Add Booking", link: "/" },
      { label: "Remove Booking", link: "/" },
    ],
  },

  {
    label: "Rooms",
    links: [
      { label: "All Room", link: "/" },
      { label: "Add Room", link: "/" },
      { label: "Remove Room", link: "/" },
    ],
  },
  {
    label: "Services",
    links: [
      { label: "All Services", link: "/" },
      { label: "Add Services", link: "/" },
      { label: "Remove Services", link: "/" },
    ],
  },
  {
    label: "Facilities",
    links: [
      { label: "All Facilities", link: "/" },
      { label: "Add Facilities", link: "/" },
      { label: "Remove Facilities", link: "/" },
    ],
  },
  {
    label: "Booking",
    links: [
      { label: "All Booking", link: "/" },
      { label: "Add Booking", link: "/" },
      { label: "Remove Booking", link: "/" },
    ],
  },
  {
    label: "Restaurant Menu",
    links: [
      { label: "All Menu", link: "/" },
      { label: "Add Menu", link: "/" },
      { label: "Remove Menu", link: "/" },
    ],
  },
];

const mockdada_Article = [
  {
    label: "News",
    initiallyOpened: true,
    links: [
      { label: "All News", link: "/" },
      { label: "Add News", link: "/" },
      { label: "Remove News", link: "/" },
    ],
  },
  {
    label: "Blog",

    links: [
      { label: "All Blog", link: "/" },
      { label: "Add Blog", link: "/" },
      { label: "Remove Blog", link: "/" },
    ],
  },

  {
    label: "Review",
    links: [
      { label: "All Review", link: "/" },
      { label: "Add Review", link: "/" },
      { label: "Remove Review", link: "/" },
    ],
  },
];

const mockdata = [
  mockdata_dashboard,
  mockdata_list,
  mockdata_Department,
  mockdata_Account,
  mockdata_Management,
  mockdada_Article,
];

export function MantineSidebar({ onPropChange, sideBarWidth }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const [menuSelect, setmenuSelect] = useState(0);
  const handleMenuChange = (index) => {
    const selectLabel = mainLinksMockdata[index];
    onPropChange(selectLabel?.label);
  };
  const menuLinks = mockdata[menuSelect].map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  const [active, setActive] = useState("Dashboard");
  const [activeLink, setActiveLink] = useState("Settings");

  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  const { colorScheme } = useMantineTheme();

  const mainLinks = mainLinksMockdata.map((link, index) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => {
          setActive(link.label);
          console.log(active);
          setmenuSelect(index);
          console.log(active);
          handleMenuChange(index);
          // console.log(menuSelect);
        }}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: link.label === active,
        })}
      >
        <link.icon size="1.4rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  useEffect(() => {
    onPropChange(active);
  }, [active]);

  return (
    <Navbar height={730} width={{ sm: sideBarWidth }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          {/* Logo  */}
          <div className={classes.logo}>
            {/* <div className="">
              <Burger color={colorScheme === "dark" ? "#aa8453" : "black"} />
            </div> */}
          </div>

          {/* side bar icons  */}
          {mainLinks}

          <Modal opened={opened} onClose={close} title="Search" centered>
            {/* Modal content */}
          </Modal>
          {/* footer icons  */}
          <Stack justify="center" spacing={200} ml={9}>
            <div className=""></div>
            <div className="">
              <NavbarLink
                icon={IconSwitchHorizontal}
                label="Change account"
                onClick={open}
              />
              <NavbarLink icon={IconLogout} label="Logout" />
            </div>
          </Stack>
        </div>

        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div>
            <Title order={2} className={classes.title}>
              {" "}

              <Image
                src={colorScheme === "dark" ? "https://duruthemes.com/demo/html/cappa/demo2-dark/img/logo.png" : "https://duruthemes.com/demo/html/cappa/demo2-light/img/logo-dark.png"}
                width={150}
                height={35}
              />
            
            </Title>
            {/* <Title order={4} pl={35} className={classes.title}>
            {active}
          </Title> */}
            <Stack justify="center" spacing={0} ml={5}>
              <div className={classes.linksInner}> {menuLinks}</div>
            </Stack>
          </div>
        </Navbar.Section>
      </Navbar.Section>
    </Navbar>
  );
}
