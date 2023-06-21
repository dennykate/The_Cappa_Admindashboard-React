import {
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
  Button,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { Link, useNavigate } from "react-router-dom";
import { useFocusWithin, useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";
import InputText from "../components/InputText";
import InputPassword from "../components/InputPassword";
import AuthDarkLightBtn from "../components/AuthDarkLightBtn";
import AuthHorizontalLine from "../components/AuthHorizontalLine";
import SocialBtnGroup from "../components/SocialBtnGroup";
import LogoDarkLight from "../components/LogoDarkLight";
import Cookies from "js-cookie";

export default function Login() {
  const { ref, focused } = useFocusWithin();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      // Specify your form fields and their initial values here
      email: "",
      password: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "password must be at least 8 characters long" : null,
    },
  });

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const onSubmitHandler = (e) => {
    // console.log(value);
    Cookies.set("isLogin", true);
    navigate("/");
  };
  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);

  return (
    <Flex
      align={"center"}
      justify={"center"}
      w={"100%"}
      mih={"100vh"}
      bg={dark ? "#1B1B1B" : "#F8F5F0"}
      className="relative"
    >
      <div className="logo top-5 absolute flex justify-between items-center w-full lg:px-48 sm:px-10 px-5">
        <LogoDarkLight dark={dark} />

        <AuthDarkLightBtn toggleColorScheme={toggleColorScheme} dark={dark} />
      </div>

      <Paper sx={{ width: 420 }} bg={"transparent"}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: "Gilda Display,serif",
            fontWeight: 900,
            color: "#AA8453",
          })}
          className="sm:text-4xl text-2xl sm:mt-0 mt-10"
        >
          Welcome back!
        </Title>
        <Text
          size="sm"
          align="center"
          mt={5}
          className={`${dark ? "text-[#F8F5F0]" : "text-gray-400"}`}
        >
          Login with social media or your credentials
        </Text>

        <Paper bg={"transparent"} p={30} radius="md" className="form-area">
          <form onSubmit={form.onSubmit(onSubmitHandler)}>
            <InputText dark={dark} form={form} />
            <InputPassword dark={dark} form={form} />
            <Group position="apart" mt="lg">
              <Checkbox
                color="yellow"
                label="Trust this device for 60 days"
                sx={{
                  ["& .mantine-Checkbox-label"]: {
                    color: dark ? "#F8F5F0" : "grey",
                    fontSize: "16px",
                  },
                }}
              />

              <Anchor component="button" size="sm" color="#AA8453">
                Forgot password?
              </Anchor>
            </Group>
            <Button
              type="submit"
              fullWidth
              variant="filled"
              className="mt-5 bg-[#AA8453] active:bg-opacity-80 hover:bg-[#AA8453] h-12 text-base"
            >
              Sign In
            </Button>
            <AuthHorizontalLine dark={dark} />
            <SocialBtnGroup />
            <div className="flex justify-between items-center mt-3">
              <Text
                className={`text-base ${
                  dark ? "text-[#F8F5F0]" : "text-gray-500"
                }`}
              >
                Don't have an account?
              </Text>
              <Link to={"/register"} className="text-[#AA8453] text-sm">
                Sign Up
              </Link>
            </div>
          </form>
        </Paper>
      </Paper>
    </Flex>
  );
}
