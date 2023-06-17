import { PasswordInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import React from "react";

const InputPassword = ({ dark, confirmation }) => {
  const { ref, focused } = useFocusWithin();
  return (
    <PasswordInput
      ref={ref}
      label={confirmation ? "Password Confirmation *" : "Password *"}
      placeholder={confirmation ? "Confirm Password" : "Password"}
      required
      mt="md"
      withAsterisk={false}
      sx={{
        input: { color: "white", padding: 0 },
      }}
      className={`border-b ${
        focused
          ? "border-[#AA8453]"
          : dark
          ? "  border-[#F8F5F0]"
          : "  border-gray-300"
      } custom-password-input`}
      variant="unstyled"
      labelProps={{ style: { color: "#AA8453" } }}
    />
  );
};

export default InputPassword;
