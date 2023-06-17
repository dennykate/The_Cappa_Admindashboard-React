import { TextInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import React from "react";

const InputText = ({ dark, form, setForm, values, errors, setErrors }) => {
  const { ref, focused } = useFocusWithin();
  return (
    <>
    <TextInput
      ref={ref}
      // id="email"
      // value={values.email}
      // onChange={(e) => setForm({ ...form, email: e.target.value })}
      label="Email *"
      placeholder="Email Address"
      required
      withAsterisk={false}
      sx={{
        input: { color: "white", borderBottom: "gray" },
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
    />
    {form.errors.email && <div>{form.errors.email}</div>}
    </>
  );
};

export default InputText;
