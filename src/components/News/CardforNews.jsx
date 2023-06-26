import React from "react";
import {
  IconBed,
  IconDetails,
  IconEdit,
  IconEye,
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
} from "@mantine/core";
import { Category } from "tabler-icons-react";
import { Link } from "react-router-dom";

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

  section: {
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

function BadgeCard({id , name, month, day, category, image , onDelete}) {
  const { classes, theme } = useStyles();

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      sx={{
        backgroundColor: theme.colorScheme === "dark" ? "#1b1b1b" : "white",
      }}
      className=""
    >
      <Card.Section className="relative select-none  group">
        <Image src={image} height={200} />
        <div className="absolute -right-24 top-2 group-hover:right-2 duration-700 ease-in-out ">
         <Link to={`/edit-news/${id}`}>
         <Tooltip label="edit">
            <Group className={classes.naviconLink}>
              <IconEdit
                className={classes.naviconLinkActive}
                size={24}
                strokeWidth={1.5}
              />
            </Group>
          </Tooltip>
         </Link>
         <Link to="">
          <Tooltip label="detail">
            <Group className={classes.naviconLink}>
              <IconEye
                className={classes.naviconLinkActive}
                size={24}
                strokeWidth={1.5}
              />
            </Group>
          </Tooltip>
          </Link>
         
          <Tooltip label="delete">
            <Group className={classes.naviconLink}>
              <IconTrash onClick={() => onDelete(id)} className="text-red-500" size={24} strokeWidth={1.5} />
            </Group>
          </Tooltip>
        </div>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text
            fz="md"
            fw={500}
            color={theme.colorScheme === "dark" ? "#aa8453" : "gray"}
            className="select-none"
          >
            {name.substring(0, 20)}...
          </Text>
          <Badge
            size="sm"
            color={theme.colorScheme === "dark" ? "#aa8453" : "gray"}
            className="select-none"
          >
            {day} / {month}
          </Badge>
        </Group>
        <Text fz="md" mt="xs" className="select-none">
          {category}
        </Text>
      </Card.Section>
      
    </Card>
  );
}

export default BadgeCard;
