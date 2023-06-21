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
import { Link, useNavigate } from "react-router-dom";
import InputText from "../components/InputText";
import InputPassword from "../components/InputPassword";
import AuthDarkLightBtn from "../components/AuthDarkLightBtn";
import AuthHorizontalLine from "../components/AuthHorizontalLine";
import SocialBtnGroup from "../components/SocialBtnGroup";
import LogoDarkLight from "../components/LogoDarkLight";

export default function Register() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {name:"", email: "", password: "", password_confirmation: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Your password must be at least 8 characters" : null,
      password_confirmation: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const onSubmitHandler = (e) => {
    // console.log(value);
    // Cookies.set("isLogin", true);
    navigate("/login");
  };
  return (
    <Flex
      align={"center"}
      justify={"center"}
      w={"100%"}
      minh={"100vh"}
      bg={dark ? "#1B1B1B" : "#F8F5F0"}
      className="relative py-[50px]"
    >
      <div className="logo absolute  top-5  w-full flex justify-between lg:px-48 sm:px-10 px-5">
        <LogoDarkLight dark={dark} />
        <AuthDarkLightBtn toggleColorScheme={toggleColorScheme} dark={dark} />
      </div>

      <Paper sx={{ width: 420 }} bg={"transparent"} className="mt-10">
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
          <form onSubmit={form.onSubmit(onSubmitHandler)}>
            <InputText dark={dark} form={form} placeholder={"John Doe"} label={"Name*"} value={"name"}/>
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
                classNames={{
                  label: `sm:text-base text-sm ${
                    dark ? "text-[#F8F5F0]" : "text-gray-500"
                  }`,
                  input: "bg-bgLight border-primary",
                }}
              />
              <Anchor className="text-[#AA8453] sm:text-base text-sm">Terms of Service</Anchor>
            </Group>
            <Button
              type="submit"
              fullWidth
              variant="filled"
              className="mt-5 bg-[#AA8453] bg-opacity-90  active:bg-opacity-80 hover:bg-[#AA8453] hover:bg-opacity-100 h-12 text-base transition-all ease-in-out duration-200"
            >
              Sign Up
            </Button>
            <AuthHorizontalLine dark={dark} />
            <SocialBtnGroup dark={dark} />
            <div className="flex justify-between items-center mt-3">
              <Text
                className={`sm:text-base text-sm ${
                  dark ? "text-[#F8F5F0]" : "text-gray-500"
                }`}
              >
                Already have an account?
              </Text>
              <Link to={"/login"} className="text-[#AA8453] sm:text-sm text-xs">
                Sign In
              </Link>
            </div>
          </form>
        </Paper>
      </Paper>
    </Flex>
  );
}
