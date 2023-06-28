import {
  Box,
  Flex,
  Text,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";

const InputContainer = ({ label, children, noAsterisk, start }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Flex
      justify="space-between"
      align={start ? "start" : "center"}
      className="w-full "
    >
      <Box className="min-w-[30%] h-full flex justify-start items-center">
        <Text>
          {label} {!noAsterisk && <span className="text-red-500">*</span>}
        </Text>
      </Box>
      {children}
    </Flex>
  );
};

export default InputContainer;
