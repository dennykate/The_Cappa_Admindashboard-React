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
      className={`w-full justify-between sm:flex-row flex-col sm:gap-0 gap-[10px] ${
        start ? " justify-start" : "justify-center"
      }`}
    >
      <Box className="min-w-[30%] h-full flex justify-start items-center">
        <Text>
          {label}{" "}
          {!noAsterisk && <span className="text-red-700 text-sm">*</span>}
        </Text>
      </Box>
      {children}
    </Flex>
  );
};

export default InputContainer;
