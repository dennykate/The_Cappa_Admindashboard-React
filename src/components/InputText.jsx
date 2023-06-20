import React from "react";
import { TextInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

const InputText = ({ dark, form, placeholder }) => {
  const { ref, focused } = useFocusWithin();

  return (
    <>
      <TextInput
        ref={ref}
        label="Email *"
        placeholder={placeholder ? placeholder : "Email Address"}
        required
        withAsterisk={false}
        sx={{
          input: { color: dark ? "#F8F5F0" : "gray", borderBottom: "gray" },
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
        {...form.getInputProps("email")}
        error={false}
      />
      {form.errors.email && (
        <p className="text-red-600 text-xs mt-1">{form.errors.email}</p>
      )}
    </>
  );
};

export default InputText;
