import { useMantineColorScheme } from "@mantine/styles";
import React, { useState } from "react";
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
  Center,

} from "@mantine/core";
import BadgeCard from "./CardforRoom";

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

const AllRoom = () => {
  const [Rooms,setRooms] = useState([
    { id: 1, name: "Junior Suite", price: 150, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/1.jpg" },
    { id: 2, name: "Family Room", price: 200, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/2.jpg" },
    { id: 3, name: "Double Room", price: 250, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/3.jpg" },
    { id: 4, name: "Deluxe Room", price: 300, time: "night" ,"img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/4.jpg"},
    { id: 5, name: "Superior Room", price: 150, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/7.jpg" },
  ]);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes, theme } = useStyles();
  const handleDelete = (id) => {
    setRooms(
      Rooms?.filter((room) => room?.id !== id)
    );
  };
  return (
    <>
     <Layout>
     <div className=" ">
    

    
    <Container size="100%" p="xl" className="cursor-pointer">
    <SimpleGrid cols={4} 
      spacing=""
      breakpoints={[
        { maxWidth: '62rem', cols: 3, spacing: 'md' },
        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
      ]}>
    {Rooms?.map((room,index)=>{
  return (
    <BadgeCard id={room?.id} name={room?.name} price={room?.price} time={room?.time} img={room?.img} key={index} onDelete={() => {
      handleDelete(room?.id);
    }} />
     )
})}
 <Card withBorder radius="md" className={classes.card}>
                  <Card.Section className={classes.section} mt="md">
                  <Link to="/management/add-room">
                      <Center maw={200} h={270} mx="auto" style={{display : "-webkit-flex"}} >
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

export default AllRoom;
