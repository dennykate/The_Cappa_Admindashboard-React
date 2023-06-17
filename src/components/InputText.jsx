import { TextInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import React from "react";

const InputText = ({dark}) => {
  const { ref, focused } = useFocusWithin();
  return (
    <TextInput
      ref={ref}
      label="Email *"
      placeholder="Email Address"
      required
      withAsterisk={false}
      sx={{
        input: { color: "white" },
      }}
      className={`border-b ${
        focused
          ? "border-[#AA8453]"
          : dark
          ? "  border-[#F8F5F0]"
          : "  border-gray-300"
      }`}
      variant="unstyled"
      labelProps={{ style: { color: "#AA8453" } }}
    />
  );
};

export default InputText;
