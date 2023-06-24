import React from "react";
import {
  IconBed,
  IconDetails,
  IconEdit,
  IconHeart,
  IconListDetails,
  IconTrash,
} from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
  SimpleGrid,
  Container,
  Flex,
  Tooltip,
  Stack,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  naviconLink: {
    width: rem(40),
    height: rem(40),
    borderRadius: theme.radius.sm,
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
    justifyContent: "center",
    color: theme.colorScheme === "dark" ? "#AA8453" : "#AA8453",
    backgroundColor:
      theme.colorScheme === "dark" ? "rgb(34,34,34)" : theme.colors.gray[0],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? "rgb(34,34,34,0.7)"
          : "rgb(170,132,83,0.7)",
      color: theme.colorScheme === "dark" ? "#ffffff" : "#222222",
    },
  },
  // "#AA8453"
  naviconLinkActive: {
    "&:hover": {
      color: "#AA8453",
    },
  },
  // card: {
  //   backgroundColor: theme.colorScheme === "dark" ? "#1b1b1b" : "white",
  // },

  section: {
    // borderBottom: `${rem(1)} solid ${
    //   theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    // }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

function BadgeCard({ icon , title , description }) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder radius="md" p="md" sx={{ backgroundColor: theme.colorScheme === "dark" ? "#1b1b1b" : "white"}} className="relative group " >
 
      <Card.Section className="pl-3 pt-8  ">
      <span className={`${icon} text-[45px] text-primary `}></span>
      <div className="absolute -right-24 top-2 group-hover:right-2 duration-700 ease-in-out ">
      <Tooltip label="edit">
            <Group className={classes.naviconLink}>
              <IconEdit
                className={classes.naviconLinkActive}
                size={24}
                strokeWidth={1.5}
              />
            </Group>
          </Tooltip>

          <Tooltip label="detail">
            <Group className={classes.naviconLink}>
              <IconListDetails
                className={classes.naviconLinkActive}
                size={24}
                strokeWidth={1.5}
              />
            </Group>
          </Tooltip>

          <Tooltip label="delete">
            <Group className={classes.naviconLink}>
              <IconTrash className="text-red-500" size={24} strokeWidth={1.5} />
            </Group>
          </Tooltip>
      </div>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}  color={theme.colorScheme === "dark" ? "#" : "#222222"}>
            {title}
          </Text>
         
        </Group>
        <Text fz="sm" mt="xs" color="dimmed">
          {description}
        </Text>
      </Card.Section>
   
    </Card>
  );
}

export default BadgeCard;
