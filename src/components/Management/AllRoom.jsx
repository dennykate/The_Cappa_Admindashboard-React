import { useMantineColorScheme } from "@mantine/styles";
import React from "react";
import Layout from "../Layout";
import { Container, Flex, Paper, SimpleGrid } from "@mantine/core";
import BadgeCard from "./CardforRoom";

const AllRoom = () => {
  const Rooms = [
    { id: 1, name: "Junior Suite", price: 150, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/1.jpg" },
    { id: 2, name: "Family Room", price: 200, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/2.jpg" },
    { id: 3, name: "Double Room", price: 250, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/3.jpg" },
    { id: 4, name: "Deluxe Room", price: 300, time: "night" ,"img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/4.jpg"},
    { id: 5, name: "Superior Room", price: 150, time: "night","img" : "https://duruthemes.com/demo/html/cappa/demo2-dark/img/rooms/7.jpg" },
  ];
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <>
     <Layout>
     <div className="py-10 sm:px-5 px-1 ">
     {/* <Paper
          radius={"md"}
          shadow="md"
          className="p-[20px]"
          bg={dark ? "#1B1B1B" : "#F8F5F0"}
        > */}
          <Flex>

          </Flex>
<Flex>

    <Container size="100%" p="xl" className="cursor-pointer">
    <SimpleGrid cols={3} 
      spacing=""
      breakpoints={[
        { maxWidth: '62rem', cols: 3, spacing: 'md' },
        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
      ]}>
    {Rooms?.map((room,index)=>{
  return (
    <BadgeCard {...room} key={index}/>
     )
})}
   </SimpleGrid>
    </Container>
   
 
 
</Flex>

        {/* </Paper> */}
</div>
     </Layout>
      
     
    </>
  );
};

export default AllRoom;
