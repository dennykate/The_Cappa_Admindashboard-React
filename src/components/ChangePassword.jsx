import { Button, Flex, Paper, PasswordInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import React, { useState } from "react";
import ChangePasswordInput from "./ChangePasswordInput";
import { useForm } from "@mantine/form";

const ChangePassword = ({ close }) => {
  const form = useForm({
    initialValues: {
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      current_password: (value) =>
        value.length < 8 ? "Your current password must be at least 8 characters" : null,
      new_password: (value) =>
        value.length < 8 ? "Your new password must be at least 8 characters" : null,
      new_password_confirmation: (value, values) =>
        value !== values.new_password ? "Passwords did not match" : null,
    },
  });
  const { ref, focused } = useFocusWithin();
  return (
    <form
      onSubmit={form.onSubmit((values) => console.log(values))}
      className="w-full pt-2 px-1"
      bg={"#1B1B1B"}
    >
      <ChangePasswordInput
        label={"Current Password"}
        value={"current_password"}
        placeholder={"Enter Your Current Password"}
        form={form}
       
      />
      <ChangePasswordInput
        label={"New Password"}
        value={"new_password"}
        placeholder={"At least 8 characters"}
        form={form}
      />
      <ChangePasswordInput
        label={"Confirm New Password"}
        value={"new_password_confirmation"}
        placeholder={"Confirm Your New Password"}
        form={form}
      />

      <Flex className="w-full justify-end mt-3">
        <Button
          type="submit"
          // onClick={close}
          className="bg-primary hover:bg-primary active:bg-opacity-80 rounded "
        >
          Change
        </Button>
      </Flex>
    </form>
  );
};

export default ChangePassword;
