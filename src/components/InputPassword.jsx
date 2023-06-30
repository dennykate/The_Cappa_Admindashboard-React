import { PasswordInput, Tooltip } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import React, { useState } from "react";

const InputPassword = ({ dark, confirmation, form, placeholder }) => {
  const { ref, focused } = useFocusWithin();
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState(
    confirmation ? form.values.password_confirmation : form.values.password
  );
  const valid = value.trim().length >= 8;
  return (
    <>
      <Tooltip
        label={
          valid ? "All good!" : "Password must include at least 8 characters"
        }
        position="bottom-start"
        withArrow
        opened={opened}
        color={valid ? "green" : undefined}
      >
        <PasswordInput
          ref={ref}
          label={confirmation ? " Confirm Password *" : "Password *"}
          placeholder={placeholder ? placeholder : "Password"}
          required
          mt="md"
          withAsterisk={false}
          sx={{
            input: { color: dark ? "#F8F5F0" : "gray", padding: 0 },
          }}
          className={`border-b ${
            focused
              ? "border-[#AA8453]"
              : dark
              ? "  border-[#F8F5F0]"
              : "  border-gray-300"
          } `}
          classNames={{visibilityToggle:"hover:bg-transparent"}}
          variant="unstyled"
          labelProps={{ style: { color: "#AA8453" } }}
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            form.setFieldValue(
              confirmation ? "password_confirmation" : "password",
              event.currentTarget.value
            );
          }}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          error={false}
        />
      </Tooltip>
      {confirmation
        ? form.errors.password_confirmation && (
            <p className="text-red-600 text-xs mt-1">
              {form.errors.password_confirmation}
            </p>
          )
        : form.errors.password && (
            <p className="text-red-600 text-xs mt-1">{form.errors.password}</p>
          )}
    </>
  );
};

export default InputPassword;
