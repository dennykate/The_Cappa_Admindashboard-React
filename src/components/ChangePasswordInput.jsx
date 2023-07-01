import { PasswordInput, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import { IconKey } from "@tabler/icons-react";
import React from "react";

const ChangePasswordInput = ({ label, form, value, placeholder }) => {
  const {colorScheme} = useMantineColorScheme();
  const defaultTheme = useMantineTheme();
  const dark = colorScheme === "dark";
  const { ref, focused } = useFocusWithin();
  return (
    <PasswordInput
      ref={ref}
      label={label}
      placeholder={placeholder}
      classNames={{
        icon:``,
        label: "mb-2",
        input: `${dark ? "bg-[#222222]" : "bg-[#F8F5F0]"} mb-2`,
        innerInput: "flex justify-center items-center text-base",

        visibilityToggle: `hover:bg-transparent ${dark? defaultTheme.colors.dark[1]:defaultTheme.colors.dark[4]}`,
      }}
      icon={<IconKey size={"1rem"} color={dark? defaultTheme.colors.dark[1]:defaultTheme.colors.dark[3]}/>}
      sx={{
        "& .mantine-PasswordInput-input": {
          borderColor: focused ? "#AA8453" : defaultTheme.colors.dark[3],
        },
        "& .mantine-PasswordInput-visibilityToggle": {
          color: dark? defaultTheme.colors.dark[1]:defaultTheme.colors.dark[3],
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
