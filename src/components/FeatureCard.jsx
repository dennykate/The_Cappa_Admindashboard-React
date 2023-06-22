import React from "react";
import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  Flex,
} from "@mantine/core";
import {
  IconBuildingBank,
  IconUsers,
  IconFileSettings,
  IconDatabase,
  IconUpload,
  IconCreditCard,
  IconMessage,
  IconSignRight,
  IconSettings2,
  IconLockAccess,
} from "@tabler/icons-react";

const mockdata = [
  {
    title: "Company",
    description: "Manage Company",
    icon: IconBuildingBank,
  },
  {
    title: "Team",
    description: "Manage Team",
    icon: IconUsers,
  },
  {
    title: "Projects",
    description: "Project Setting",
    icon: IconFileSettings,
  },
  {
    title: "Documents",
    description: "Data privacy",
    icon: IconDatabase,
  },
  {
    title: "Upload",
    description: "Upload setting",
    icon: IconUpload,
  },
  {
    title: "Billing",
    description: "Billing and plans",
    icon: IconCreditCard,
  },
  {
    title: "Messaging",
    description: "Chat setting",
    icon: IconMessage,
  },
  {
    title: "Security",
    description: "Security Setting",
    icon: IconLockAccess,
  },
  {
    title: "Preferences",
    description: "General Setting",
    icon: IconFileSettings,
  },
  {
    title: "Projects",
    description: "Project Setting",
    icon: IconSettings2,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(30),
    fontWeight: 500,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      //   marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? "#222222" : "#F8F5F0"
    }`,

    backgroundColor:
      theme.colorScheme === "dark" ? "#181818" : theme.colors.gray[1],
    width: rem(200),
    height: rem(150),
    "&:hover": {
        border: `${rem(1)} solid ${
            theme.colorScheme === "dark" ? "#aa8453" : "#aa8453"
          }`,
    },
  },

  cardTitle: {
    // '&::after': {
    //   content: '""',
    //   display: 'block',
    //   backgroundColor: theme.fn.primaryColor(),
    //   width: rem(45),
    //   height: rem(2),
    //   marginTop: theme.spacing.sm,
    // },
  },
}));

function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => {
    const IconComponent = feature.icon;
    return (
      <Card
        key={feature.title}
        shadow="md"
        radius="md"
        className={classes.card}
        padding="xl"
      >
        <Flex className="flex-col justify-center items-center">
          <IconComponent size={rem(40)} stroke={1.5} color="#aa8453" />
          <Text fz="md" fw={400} mb={0} className={classes.cardTitle} mt="0">
            {feature.title}
          </Text>
          <Text fz="sm" c="dimmed" mb="sm">
            {feature.description}
          </Text>
        </Flex>
      </Card>
    );
  });

  return (
    <Container size="lg" pb="xl" className="cursor-pointer">
      <SimpleGrid
        cols={5}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default FeaturesCards;
