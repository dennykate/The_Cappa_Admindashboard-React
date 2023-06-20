import { Avatar, Badge, Flex, Text } from "@mantine/core";
import React from "react";

const NotificationCard = ({ dark, image, avatar, title, name, time, date }) => {
  return (
    <Flex py={10} className="sm:flex-row flex-col sm:gap-[20px] gap-[10px]">
      <img
        src={image}
        className="sm:w-[160px] w-full h-[100px]  rounded-md object-cover"
      />
      <Flex direction="column" justify="center" gap={10}>
        <Flex gap={10} align="center">
          <Text fw={600} fz="md">
            {title}
          </Text>
          <Badge className="bg-primary text-white" size="md">
            {date}
          </Badge>
        </Flex>
        <Flex align="center" gap={12}>
          <Avatar src={avatar} alt={name} radius="xl" size={"sm"} />
          <Text
            className={` font-[500]  sm:text-base text-sm ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {name}
          </Text>
          <Text className=" font-[400] text-gray-500 sm:text-sm text-xs">
            {time}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NotificationCard;
