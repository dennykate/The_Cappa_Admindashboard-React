import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
  Button,
  Flex,
  Divider,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { FaTwitter, FaGoogle, FaFacebookF } from "react-icons/fa";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import InputText from "../components/InputText";
import InputPassword from "../components/InputPassword";
import AuthDarkLightBtn from "../components/AuthDarkLightBtn";
import AuthHorizontalLine from "../components/AuthHorizontalLine";
import SocialBtnGroup from "../components/SocialBtnGroup";
import LogoDarkLight from "../components/LogoDarkLight";

export default function Register() {
  const form = useForm({
    initialValues: { email: "", password: "", password_confirmation: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Your password must be at least 8 characters" : null,
      password_confirmation: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Flex
      align={"center"}
      justify={"center"}
      w={"100%"}
      h={"100vh"}
      bg={dark ? "#1B1B1B" : "#F8F5F0"}
      className="relative overflow-x-auto"
    >
      <div className="logo absolute  top-5  w-full flex justify-between lg:px-48 sm:px-10 px-5">
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
          className="sm:text-4xl text-2xl mt-10"
        >
          Welcome to Cappa
        </Title>
        <Text
          className={`${dark ? "text-[#F8F5F0]" : "text-gray-400"}`}
          size="sm"
          align="center"
          mt={5}
        >
          Let's start by creating you account
        </Text>

        <Paper bg={"transparent"} p={30} radius="md">
          <form onSubmit={form.onSubmit(console.log)}>
            <InputText
              dark={dark}
              form={form}
              placeholder={"eg. example@gmail.com"}
            />
            <InputPassword dark={dark} form={form} placeholder={"••••••••"} />
            <InputPassword
              dark={dark}
              confirmation
              form={form}
              placeholder={"••••••••"}
            />
            <Group mt="lg" className="gap-1">
              <Checkbox
                color="yellow"
                label="I accept the"
                sx={{
                  ["& .mantine-Checkbox-label"]: {
                    color: dark? "#F8F5F0":"gray",
                    fontSize: "16px",
                  },
                }}
              />
              <Anchor className="text-[#AA8453]">Terms of Service</Anchor>
            </Group>
            <Button
              type="submit"
              fullWidth
              variant="filled"
              className="mt-5 bg-[#AA8453] hover:bg-[#AA8453] h-12 text-base"
            >
              Sign Up
            </Button>
            <AuthHorizontalLine dark={dark} />
            <SocialBtnGroup dark={dark} />
            <div className="flex justify-between items-center mt-3">
              <Text
                className={`text-base ${
                  dark ? "text-[#F8F5F0]" : "text-gray-500"
                }`}
              >
                Already have an account?
              </Text>
              <Link to={"/login"} className="text-[#AA8453] text-sm">
                Sign In
              </Link>
            </div>
          </form>
        </Paper>
      </Paper>
    </Flex>
  );
}
