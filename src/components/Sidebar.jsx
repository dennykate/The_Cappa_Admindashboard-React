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
  Flex,
  MediaQuery,
  Burger,
  CloseButton,
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
  IconCross,
  IconCrossOff,
} from "@tabler/icons-react";

import { LinksGroup } from "./NavbarLinkGroup";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styled from "styled-components";
import { Paper } from "@mantine/core";
import { Input } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100%",
  },

  aside: {
    height: "100%",
    flex: `0 0 ${rem(60)}`,
    backgroundColor: theme.colorScheme === "dark" ? "#1B1B1B" : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: `${rem(9)}`,
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
      color: "#AA8453",
    },
  },
  // "#AA8453"
  mainLinkActive: {
    "& , &:hover": {
      backgroundColor: "rgb(170,132,83,0.1)",
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
      color: "#AA8453",
    },
  },
  // "#AA8453"
  lowerLinkActive: {
    "&": {
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
      color: "#AA8453",
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
  ControlActive: {
    "& , &:hover": {
      backgroundColor: "rgb(170,132,83,0.1)",
      color: "#AA8453",
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

const mainLinksMockdata = [
  {
    icon: IconLayoutDashboard,
    label: "Dashboard",
    subLinks: [
      "/dashboard/overview",
      "/dashboard/chart",
      "/dashboard/calendar",
    ],
  },
  {
    icon: IconCalendarStats,
    label: "List",
    subLinks: [
      "/list/room-list",
      "/list/guest-list",
      "/list/concierge-list",
      "/list/review-list",
    ],
  },
  {
    icon: IconUsersGroup,
    label: "Department",
    subLinks: [
      "/department/team-leader",
      "/department/add-teamleader",
      "/department/edit-teamleader",
    ],
  },
  {
    icon: IconBookmarkEdit,
    label: "Management",
    subLinks: [
      "/management/all-booking",
      "/management/add-booking",
      "/management/edit-booking",
      "/management/all-rooms",
      "/management/add-rooms",
      "/management/edit-rooms",
      "/management/all-services",
      "/management/add-services",
      "/management/edit-services",
      "/management/all-facilities",
      "/management/add-facilities",
      "/management/edit-facilities",
      "/management/all-menu",
      "/management/add-menu",
      "/management/edit-menu",
    ],
  },
  {
    icon: IconWriting,
    label: "Blog and Review",
    subLinks: ["/news/all-news", "/news/add-news", "/news/edit-news"],
  },
  // { icon: IconUser, label: "Account" },
];

const mockdata_dashboard = [
  {
    label: "Dashboard",
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/dashboard/overview" },
      { label: "Chart", link: "/dashboard/chart" },
      { label: "Calendar", link: "/dashboard/calendar" },
    ],
  },
];

const mockdata_list = [
  {
    label: "List",
    initiallyOpened: true,
    links: [
      { label: "Room List", link: "/list/room-list" },
      { label: "Guest List", link: "/list/guest-list" },
      { label: "Concierge List", link: "/list/concierge-list" },
      { label: "Review", link: "/list/review-list" },
    ],
  },
];

const mockdata_Department = [
  {
    label: "Team",
    initiallyOpened: true,
    links: [
      { label: "Team Leader", link: "/department/team-leader" },
      { label: "Add Team Leader", link: "/department/add-teamleader" },
      { label: "Edit Team Leader", link: "/department/edit-teamleader" },
    ],
  },
];

const mockdata_Management = [
  {
    label: "Booking",
    links: [
      { label: "All Booking", link: "/management/all-booking" },
      { label: "Add Booking", link: "/management/add-booking" },
      { label: "Edit Booking", link: "/management/edit-booking" },
    ],
  },
  {
    label: "Rooms",
    links: [
      { label: "All Rooms", link: "/management/all-rooms" },
      { label: "Add Rooms", link: "/management/add-rooms" },
      { label: "Edit Rooms", link: "/management/edit-room-suite" },
    ],
  },

  {
    label: "Services",
    links: [
      { label: "All Services", link: "/management/all-services" },
      { label: "Add Services", link: "/management/add-services" },
      { label: "Edit Services", link: "/management/edit-services" },
    ],
  },
  {
    label: "Facilities",
    links: [
      { label: "All Facilities", link: "/management/all-facilities" },
      { label: "Add Facilities", link: "/management/add-facilities" },
      { label: "Edit Facilities", link: "/management/edit-facilities" },
    ],
  },

  {
    label: "Restaurant Menu",
    links: [
      { label: "All Menu", link: "/management/all-menu" },
      { label: "Add Menu", link: "/management/add-menu" },
      { label: "Edit Menu", link: "/management/edit-menu" },
    ],
  },
];

const mockdada_Article = [
  {
    label: "News",
    initiallyOpened: true,
    links: [
      { label: "All News", link: "/news/all-news" },
      { label: "Add News", link: "/news/add-news" },
      { label: "Edit News", link: "/news/edit-news" },
    ],
  },
];

const mockdata = [
  mockdata_dashboard,
  mockdata_list,
  mockdata_Department,
  mockdata_Management,
  mockdada_Article,
];

const StyledPaper = styled(Paper)`
  width: 100%;
  transition: width 0.5s;
`;

function NavbarLink({ icon: Icon, label, active, onClick, iconColor = null }) {
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
          [classes]: NavbarLink.label === active,
        })}
        style={{
          color: iconColor ?? "",
        }}
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
export function MantineSidebar({
  onPropChange,
  sideBarWidth,
  handleIsOpen,
  isOpen,
}) {
  const { pathname } = useLocation();
  console.log(pathname);
  const defaultTheme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(
    localStorage.getItem("lastRoute") || "Overview"
  );
  const [activeLink, setActiveLink] = useState("Settings");

  const [menuSelect, setmenuSelect] = useState(
    localStorage.getItem("lastMenuSelect") || 0
  );
  const menuLinks = mockdata[menuSelect].map((item) => (
    <LinksGroup {...item} onPropChange={onPropChange} key={item.label} />
  ));

  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  const { colorScheme } = useMantineTheme();

  console.log(pathname);
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
          handleIsOpen();
        }}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: link.label === active,
        })}
      >
        <link.icon
          size="1.4rem"
          stroke={1.5}
          className={link.subLinks?.includes(pathname) ? "text-primary" : ""}
        />
      </UnstyledButton>
    </Tooltip>
  ));

  useEffect(() => {
    localStorage.setItem("lastMenuSelect", menuSelect);
  }, [menuSelect]);

  return (
    <StyledPaper>
      <Navbar
        height="100vh"
        width={{ sm: sideBarWidth() }}
        style={{
          transition: "width 0.5s",
        }}
      >
        <Navbar.Section grow className={classes.wrapper}>
          <div className={classes.aside}>
            {/* Logo  */}
            <div className={classes.logo}>
           {/* {isOpen &&  <CloseButton
                size={25}
                color={colorScheme === "dark" ? "#aa8453" : "#aa8453"}
                onClick={() => {
                  handleIsOpen();
                }}
              className="lg:hidden block"  
              />} */}
            </div>

            <div className="flex flex-col justify-between items-center h-full">
              {/* side bar icons  */}
              <div>{mainLinks}</div>

              <Modal
                opened={opened}
                onClose={close}
                centered
                // title="Authentication"
              >
                {/* Modal content */}
                <Image
                  src={
                    colorScheme === "dark"
                      ? "https://duruthemes.com/demo/html/cappa/demo2-dark/img/logo.png"
                      : "https://duruthemes.com/demo/html/cappa/demo2-light/img/logo-dark.png"
                  }
                  style={{
                    width: "55%",
                    height: "100%",
                    margin: "0 auto",
                  }}
                />
                <Input
                  icon={
                    <IconSearch
                      size={20}
                      color={
                        colorScheme === "dark"
                          ? defaultTheme.colors.dark[1]
                          : defaultTheme.colors.dark[3]
                      }
                    />
                  }
                  placeholder="Search here"
                  sx={{
                    input: {
                      overflow: "auto",
                      height: 30,
                      borderColor:
                        colorScheme === "dark"
                          ? defaultTheme.colors.dark[5]
                          : defaultTheme.colors.dark[3],
                    },
                    zIndex: 10,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                  }}
                  radius="xs"
                  rightSection={
                    <Tooltip
                      label="Search by voice"
                      position="top-end"
                      withArrow
                    >
                      <div>
                        <IconMicrophone
                          size="1rem"
                          style={{ display: "block", opacity: 1 }}
                          color={
                            colorScheme === "dark"
                              ? defaultTheme.colors.dark[1]
                              : defaultTheme.colors.dark[3]
                          }
                        />
                      </div>
                    </Tooltip>
                  }
                />
              </Modal>

              {/* footer icons  */}
              <Stack justify="center">
                <div className=""></div>
                <div className={classes}>
                  <NavbarLink icon={IconSearch} label="search" onClick={open} />
                  <Link to="/setting">
                    <NavbarLink
                      icon={IconSettings}
                      label="setting"
                      iconColor={pathname === "/setting" ? "#aa8453" : ""}
                    />
                  </Link>
                  <NavbarLink icon={IconLogout} label="logout" />
                </div>
              </Stack>
            </div>
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
                  zIndex: 1,
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
                    width: "70%",
                    height: "100%",
                    margin: "0 auto",
                    // backgroundColor : "red"
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
    //  </MediaQuery>
  );
}
