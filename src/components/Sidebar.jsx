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
  useMantineTheme,
  ScrollArea,
} from "@mantine/core";
import {
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
  IconLogout,
  IconUserEdit,
  IconBookmarkEdit,
  IconWriting,
  IconMicrophone2,
  IconFileInvoice,
  IconMicrophoneOff,
  IconMicrophone,
} from "@tabler/icons-react";

import { LinksGroup } from "./NavbarLinkGroup";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styled from "styled-components";
import { Paper } from "@mantine/core";
import { Input } from "@mantine/core";
// import TheCappa from "src/assets/logo.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  aside: {
    flex: `0 0 ${rem(60)}`,
    backgroundColor: theme.colorScheme === "dark" ? "#1B1B1B" : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: `${rem(9.5)}`,
    paddingRight: `${rem(7.5)}`,
    borderRight: `${rem(0.5)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
  // upper logo
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
  // "#AA8453"
  mainLinkActive: {
    "& , &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: "#AA8453",
    },
  },

  // lower logo
  lowerLink: {
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
  // "#AA8453"
  lowerLinkActive: {
    " &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
      color: "#AA8453",
    },
  },
  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: rem(60),
    paddingTop: theme.spacing.md,
    // borderBottom: `${rem(1)} solid ${
    //   theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    // }`,
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
        ? "theme.colors.dark[0]"
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
    <Tooltip
      label={label}
      position="right"
      transitionProps={{ duration: 0 }}
      withArrow
    >
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.lowerLink, {
          [classes.lowerLinkActive]: NavbarLink.label === active,
        })}
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
  { icon: IconCalendarStats, label: "List" },
  { icon: IconUsersGroup, label: "Department" },
  { icon: IconUser, label: "Account" },
  { icon: IconBookmarkEdit, label: "Management" },
  { icon: IconWriting, label: "Blog and Review" },
];

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
const StyledPaper = styled(Paper)`
  // position: fixed;
  // top: 0px;
  // left: 0px;
`;

export function MantineSidebar({
  onPropChange,
  sideBarWidth,
  handleIsOpen,
  isOpen,
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Dashboard");
  const [activeLink, setActiveLink] = useState("Settings");

  const [menuSelect, setmenuSelect] = useState(0);
  const handleMenuChange = (index) => {
    const selectLabel = mainLinksMockdata[index];
    onPropChange(selectLabel?.label);
  };
  const menuLinks = mockdata[menuSelect].map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

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
          setmenuSelect(index);
          handleMenuChange(index);
          handleIsOpen();
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
    <StyledPaper>
      <Navbar
        height={740}
        width={{ sm: sideBarWidth() }}
        style={{
          transition: "width 0.5s",
          minWidth: 0,
        }}
      >
        <Navbar.Section grow className={classes.wrapper}>
          <div className={classes.aside}>
            {/* Logo  */}
            <div className={classes.logo}></div>

            {/* side bar icons  */}
            {mainLinks}

            <Modal
              opened={opened}
              onClose={close}
              centered
              // title="Authentication"
            >
              {/* Modal content */}
              <Input
                icon={<IconSearch size={20} />}
                placeholder="Search here"
                radius="xs"
                rightSection={
                  <Tooltip
                    label="Search by voice"
                    transitionProps={{ transition: "slide-up", duration: 300 }}
                    withArrow
                  >
                    <div>
                      <IconMicrophone
                        size="1rem"
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                }
              />
            </Modal>
            {/* footer icons  */}
            <Stack justify="center" spacing={250}>
              <div className=""></div>
              <div className={classes}>
                <NavbarLink icon={IconSearch} label="Search" onClick={open} />
                <NavbarLink icon={IconSettings} label="Setting" />
                <NavbarLink icon={IconLogout} label="Logout" />
              </div>
            </Stack>
          </div>

          <Navbar.Section
            grow
            className={classes.links}
            component={ScrollArea}
            style={{ marginLeft: 0, marginRight: 0 }}
            h={"100vh"}
            bg={colorScheme === "dark" ? "#1B1B1B" : "white"}
          >
            <div>
              <Title
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 999,
                  backgroundColor: colorScheme === "dark" ? "#1A1B1E" : "white",
                  padding: "10px 0px",
                }}
              >
                <Image
                  src={
                    colorScheme === "dark"
                      ? "https://duruthemes.com/demo/html/cappa/demo2-dark/img/logo.png"
                      : "https://duruthemes.com/demo/html/cappa/demo2-light/img/logo-dark.png"
                  }
                  style={{
                    width: "65%",
                    height: "100%",
                    margin: "0 auto",
                  }}
                />
              </Title>
              {/* <Title order={4} pl={35} className={classes.title}>
            {active}
          </Title> */}
              <Stack justify="center" spacing={0} ml={5}>
                <div className={classes.linksInner}>{menuLinks}</div>
              </Stack>
            </div>
          </Navbar.Section>
        </Navbar.Section>
      </Navbar>
    </StyledPaper>
  );
}
