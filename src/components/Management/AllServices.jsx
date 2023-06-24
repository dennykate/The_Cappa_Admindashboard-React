import React from "react";
import Layout from "../Layout";

import BadgeCard from "./CardforService";
import {
  IconEdit,
  IconListDetails,
  IconPencil,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  Badge,
  createStyles,
  rem,
  SimpleGrid,
  Container,
  Flex,
  Tooltip,
  useMantineColorScheme,
  Skeleton,
  Center,
} from "@mantine/core";
import { Link } from "react-router-dom";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? "#1b1b1b" : "white",
  },

  section: {
    backgroundColor: theme.colorScheme === "dark" ? "#1b1b1b" : "white",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  // label: {
  //   textTransform: "uppercase",
  //   fontSize: theme.fontSizes.xs,
  //   fontWeight: 700,
  // },
}));
const AllServices = () => {
  const pricingCardData = [
    {
      image:
        "https://duruthemes.com/demo/html/cappa/demo2-dark/img/pricing/1.jpg",
      title: "Room Cleaning",
      price: "$50",
      per: "monthly",
    },
    {
      image:
        "https://duruthemes.com/demo/html/cappa/demo2-dark/img/pricing/2.jpg",
      title: "Drinks Included",
      price: "$30",
      per: "daily",
    },
    {
      image:
        "https://duruthemes.com/demo/html/cappa/demo2-dark/img/pricing/3.jpg",
      title: "Room Breakfast",
      price: "$30",
      per: "daily",
    },
    {
      image:
        "https://duruthemes.com/demo/html/cappa/demo2-dark/img/pricing/4.jpg",
      title: "Safe & Secure",
      price: "$15",
      per: "daily",
    },
  ];
  const { colorScheme } = useMantineColorScheme();
  const { classes, theme } = useStyles();
  const dark = colorScheme === "dark";
  return (
    <>
      <Layout>
        <div className=" ">
          
            <Container size="100%" p="xl" className="cursor-pointer">
              <SimpleGrid
                cols={4}
                spacing=""
                breakpoints={[
                  { maxWidth: "62rem", cols: 3, spacing: "md" },
                  { maxWidth: "48rem", cols: 2, spacing: "sm" },
                  { maxWidth: "36rem", cols: 1, spacing: "sm" },
                ]}
              >
                {pricingCardData?.map((service, index) => {
                  return <BadgeCard {...service} key={index} />;
                })}
                <Card withBorder radius="md" className={classes.card}>
                 
                <Link to="/management/add-services">
                      <Center maw={200} h={300} mx="auto" style={{display : "-webkit-flex"}} >
                        <div className="flex flex-col justify-center items-center">
                          {" "}
                          <IconPlus
                            size={50}
                            color={
                              theme.colorScheme === "dark" ? "#aa8453" : "gray"
                            }
                          />
                          <Text
                            fz={20}
                            fw={500}
                            color={
                              theme.colorScheme === "dark" ? "#aa8453" : "gray"
                            }
                          >
                            {" "}
                            Create New
                          </Text>
                        </div>
                      </Center>
                      </Link>
                  
                </Card>
              </SimpleGrid>
            </Container>
   
        </div>
      </Layout>
    </>
  );
};

export default AllServices;
