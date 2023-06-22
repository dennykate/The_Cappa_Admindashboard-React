import React from "react";
import {
  IconBed,
  IconDetails,
  IconEdit,
  IconHeart,
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
  title,
  description,
  country,
  badges,
}) {
  const { classes, theme } = useStyles();
  

  //   const features = badges?.map((badge) => (
  //     <Badge
  //       color={theme.colorScheme === "dark" ? "#aa8453" : "gray"}
  //       key={badge.label}
  //       leftSection={badge.emoji}
  //     >
  //       {badge.label}
  //     </Badge>
  //   ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section className="relative">
        <Image src={img} alt={title} height={250} />
        <div className="absolute right-2 top-2">
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
              <IconDetails
                className={classes.naviconLinkActive}
                size={24}
                strokeWidth={1.5}
              />
            </Group>
          </Tooltip>

          <Tooltip label="delete">
            <Group className={classes.naviconLink}>
              <IconTrash
                className={classes.naviconLinkActive}
                size={24}
                strokeWidth={1.5}
              />
            </Group>
          </Tooltip>
        </div>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {name}
          </Text>
          <Badge
            size="sm"
            color={theme.colorScheme === "dark" ? "#aa8453" : "gray"}
          >
            {price} / {time}
          </Badge>
        </Group>
        {/* <Text fz="sm" mt="xs">
          {description}
        </Text> */}
      </Card.Section>
      <Flex>
        <div className="icongroup flex gap-3 items-center  ">
          <i className="flaticon-bed text-[18px] hover:text-primary"></i>

          <i className="flaticon-bath text-[18px] hover:text-primary"></i>
          <i className="flaticon-breakfast text-[18px] hover:text-primary"></i>
          <i className="flaticon-towel text-[18px] hover:text-primary"></i>
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
