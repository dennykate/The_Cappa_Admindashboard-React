import React, { useState } from "react";
import Layout from "../Layout";
import { useMantineColorScheme } from "@mantine/styles";
import {
  Card,
  Text,
  Group,
  createStyles,
  SimpleGrid,
  Container,
  Flex,
  Center,
} from "@mantine/core";
import BadgeCard from "./CardforTeam";
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
const Teamleader = () => {
  const [teamMembers, setteamMembers] = useState([
    {
      id: 1,
      name: "Valentina Karla",
      position: "General Manager",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/4.jpg",
      email: "valentina@hotel.com",
    },
    {
      id: 2,
      name: "Micheal White",
      position: "Guest Service Department",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/1.jpg",
      email: "micheal@hotel.com",
    },
    {
      id: 3,
      name: "Olivia Martin",
      position: "Reservations Manager",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/2.jpg",
      email: "olivia@hotel.com",
    },
    {
      id: 4,
      name: "mariana Dana",
      position: "F&B Manager",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/5.jpg",
      email: "mariana@hotel.com",
    },
    {
      id: 5,
      name: "Enrico Brown",
      position: "Head Chef",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/3.jpg",
      email: "enrico@hotel.com",
    },
    {
      id: 6,
      name: "Victoria Dan",
      position: "Meetings and Events Manager",
      img: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/6.jpg",
      email: "victoria@hotel.com",
    },
  ]);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, theme } = useStyles();

  const handleDelete = (id) => {
    console.log(`ID is ${id}`);
    setteamMembers(teamMembers?.filter((member) => member?.id !== id));
  };
  return (
    <>
      <Layout>
        <div className=" ">
          <Container size="100%" p="xl" className="cursor-pointer">
            <SimpleGrid
              cols={4}
              spacing=""
              breakpoints={[
                { maxWidth: "62rem", cols: 3, spacing: "sm" },
                { maxWidth: "48rem", cols: 2, spacing: "sm" },
                { maxWidth: "36rem", cols: 1, spacing: "sm" },
              ]}
            >
              {teamMembers?.map((member, index) => {
                return (
                  <BadgeCard
                    id={member?.id}
                    name={member?.name}
                    position={member?.position}
                    img={member?.img}
                    email={member?.email}
                    onDelete={() => {
                      handleDelete(member?.id);
                    }}
                    key={index}
                  />
                );
              })}
              <Card withBorder radius="md" className={classes.card}>
                <Link to="/department/teamleader">
                  <Center
                    maw={200}
                    h={300}
                    mx="auto"
                    style={{ display: "-webkit-flex" }}
                  >
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

export default Teamleader;
