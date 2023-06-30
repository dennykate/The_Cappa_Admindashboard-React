import { PasswordInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import { IconKey } from "@tabler/icons-react";
import React from "react";

const ChangePasswordInput = ({ label, form, value, placeholder }) => {
  const { ref, focused } = useFocusWithin();
  return (
    <PasswordInput
      ref={ref}
      label={label}
      placeholder={placeholder}
      classNames={{
        label: "mb-2",
        input: "bg-[#222222] mb-2",
        innerInput: "flex justify-center items-center text-base",
        // placeholder:"text-lg",
        visibilityToggle: "hover:bg-transparent",
      }}
      icon={<IconKey size={"1rem"} />}
      sx={{
        "& .mantine-PasswordInput-input": {
          borderColor: focused ? "#AA8453" : "",
        },
        "& ::placeholder": {
          fontSize: "14px",
        },
      }}
      {...form.getInputProps(value)}
    />
  );
};

export default ChangePasswordInput;
