import React from "react";
import Layout from "../Layout";
import { useMantineColorScheme } from "@mantine/styles";
import {
  Card,
  Center,
  Container,
  createStyles,
  Flex,
  Group,
  SimpleGrid,
  Skeleton,
  Text,
} from "@mantine/core";
import BadgeCard from "./CardforFacilities";
import { Link } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";

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
}));

const AllFacilities = () => {
  const hotelFacilitiesData = [
    {
      icon: "flaticon-world",
      title: "Pick Up & Drop",
      description:
        "  We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
    },
    {
      icon: "flaticon-car",
      title: "Parking Space",
      description:
        "Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
    },
    {
      icon: "flaticon-bed",
      title: "Room Service",
      description:
        "Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
    },
    {
      icon: "flaticon-swimming",
      title: "Swimming Pool",
      description:
        "Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.",
    },
    {
      icon: "flaticon-wifi",
      title: "Fibre Internet",
      description:
        "Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
    },
    {
      icon: "flaticon-breakfast",
      title: "Breakfast",
      description:
        "Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant",
    },
  ];
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, theme } = useStyles();
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
                {hotelFacilitiesData?.map((facility, index) => {
                  return <BadgeCard {...facility} key={index} />;
                })}
                <Card withBorder radius="md" className={classes.card}>
                  <Card.Section className={classes.section} mt="md">
                  <Link to="/management/add-facilities">
                      <Center maw={200} h={150} mx="auto" style={{display : "-webkit-flex"}} >
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
                  </Card.Section>
                </Card>

             
              </SimpleGrid>
            </Container>
    
        </div>
      </Layout>
    </>
  );
};

export default AllFacilities;
