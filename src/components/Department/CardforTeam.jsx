import React from "react";
import {
  IconBed,
  IconDetails,
  IconEdit,
  IconExternalLink,
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
  Modal,
  Menu,
  CloseButton,
} from "@mantine/core";
import { MdOutlineMoreVert } from "react-icons/md";
import { useState } from "react";
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
  card: {
    backgroundColor: theme.colorScheme === "dark" ? "#1b1b1b" : "white",
    
  },

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
  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

function BadgeCard({ id, name, position, img, email , onDelete }) {
  // const [members,setmembers] = useState({id,name,position,img,email});
  const {classes, theme} = useStyles();
  const [open, setOpen] = useState("false");

  
  const Moreiconhandler = () => {
    setOpen(!open);
  };

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section  className="relative select-none group">
        <Image src={img} height={200} />
        <div  className="absolute -right-24 top-2 group-hover:right-2 duration-700 ease-in-out ">
        <Link to={`/edit-team/${id}`}>
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
            fz="xl"
            fw={500}
            color={theme.colorScheme === "dark" ? "#aa8453" : "#aa8453"}
            className="select-none"
          >
            {name}
          </Text>
        </Group>

        <Text
          fz="sm"
          className={classes.cardTitle}
          mt="md"
          color={theme.colorScheme === "dark" ? "#" : "gray"}
          
        >
          {position}
        </Text>
        <Text
          fz="sm"
          mt="xs"
          color={theme.colorScheme === "dark" ? "#" : "gray"}
          className="select-none"

        >
          {email}
        </Text>
      </Card.Section>
    </Card>
  );
}

export default BadgeCard;
