import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  createStyles,
  SimpleGrid,
  Container,
  Flex,
  useMantineColorScheme,
  Center,
} from "@mantine/core";
import BadgeCard from "./CardforNews";
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
const Allnews = () => {
  const News = [
    {
      id: 1,
      name: "Historic restaurant renovated",
      month: "Dec",
      day: "02",
      category: "restaurant",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/1.jpg",
    },
    {
      id: 2,
      name: "Benefits of Spa Treatments",
      month: "Dec",
      day: "04",
      category: "spa",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/2.jpg",
    },
    {
      id: 3,
      name: "Hotel Bathroom Collections",
      month: "Dec",
      day: "06",
      category: "bathrooms",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/3.jpg",
    },
    {
      id: 4,
      name: "Weight Loss with Fitness Health Club",
      month: "Dec",
      day: "08",
      category: "health",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/4.jpg",
    },
    {
      id: 5,
      name: "Retro Lighting Design in The Hotels",
      month: "Dec",
      day: "08",
      category: "design",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/6.jpg",
    },
    {
      id: 6,
      name: "Benefits of Swimming for Your Health",
      month: "Dec",
      day: "08",
      category: "health",
      image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/news/5.jpg",
    },
  ];
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, theme } = useStyles();
  return (
    <>
      <Layout>
        <div className=" ">
          
          {/* className={`justify-center flex-col  p-14 `} */}
            <Container size="100%" p="xl" className="cursor-pointer  ">
              <SimpleGrid
                cols={4}
                spacing=""
                breakpoints={[
                  { maxWidth: "62rem", cols: 3, spacing: "md" },
                  { maxWidth: "48rem", cols: 2, spacing: "sm" },
                  { maxWidth: "36rem", cols: 1, spacing: "sm" },
                ]}
              >
                {News?.map((newsdata, index) => {
                  return <BadgeCard {...newsdata} key={index} />;
                })}
                <Card withBorder radius="md" className={classes.card}>
                  <Card.Section className={classes.section} mt="md">
                  <Link to="/management/add-services">
                      <Center maw={200} h={300} mx="auto"  >
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

export default Allnews;
