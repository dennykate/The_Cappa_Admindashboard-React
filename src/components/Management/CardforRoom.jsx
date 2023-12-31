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
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    naviconLink: {
        width: rem(40),
        height: rem(40),
        borderRadius: theme.radius.sm,
        display: "flex",
        alignItems: "center",
        marginBottom : "5px",
        justifyContent: "center",
        color:
          theme.colorScheme === "dark"
            ? "#AA8453"
            : "#AA8453",
        backgroundColor:
            theme.colorScheme === "dark"
              ? "rgb(34,34,34)"
              : theme.colors.gray[0],
            
    
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? "rgb(34,34,34,0.7)"
              : "rgb(170,132,83,0.7)",
              color:
          theme.colorScheme === "dark"
            ? "#ffffff"
            : "#222222",
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
}));

function BadgeCard({
  id,
  name,
  price,
  time,
  img,
 onDelete
}) {
  const { classes, theme } = useStyles();
  

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section className="relative  group">
        <Image src={img}  height={200} />
        <div  className="absolute -right-24 top-2 group-hover:right-2 duration-700 ease-in-out ">
          <Link to={`/edit-rooms/${id}`}>
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
            
          <Text fz="lg" fw={500} color={theme.colorScheme === "dark" ? "#aa8453" : "gray"} className="select-none" >
            {name}
          </Text>
          <Badge
            size="sm"
            color={theme.colorScheme === "dark" ? "#aa8453" : "yellow" }
            className="select-none"
          >
            {price} / {time}
          </Badge>
        </Group>
        {/* <Text fz="sm" mt="xs">
          {description}
        </Text> */}
      </Card.Section>
      <Flex>
        <div className="icongroup flex gap-3 items-center  select-none ">
          <i className="flaticon-bed text-[18px] select-none hover:text-primary"></i>

          <i className="flaticon-bath text-[18px] select-none hover:text-primary"></i>
          <i className="flaticon-breakfast text-[18px] select-none hover:text-primary"></i>
          <i className="flaticon-towel text-[18px] select-none hover:text-primary"></i>
        </div>
      
      </Flex>
      {/* <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section> */}

      <Group mt="xs"></Group>
    </Card>
  );
}

export default BadgeCard;
