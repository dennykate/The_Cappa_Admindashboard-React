import React from "react";
import {
  Avatar,
  Text,
  Button,
  Paper,
  useMantineColorScheme,
  Group,
  createStyles,
  rem,
  Flex,
} from "@mantine/core";
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitter, IconBrandTwitterFilled } from "@tabler/icons-react";
import FeaturesCards from "./FeatureCard";


const useStyles = createStyles((theme) => ({
    naviconLink: {
        width: rem(35),
        height: rem(35),
        borderRadius: theme.radius.lg,
        display: "flex",
        alignItems: "center",
        marginRight : rem(15),
        justifyContent: "center",
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[0]
            : theme.colors.gray[7],
         backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : "#F8F5F0",
    
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
              border: `${rem(1)} solid ${
                theme.colorScheme === "dark" ? "#aa8453" : "#aa8453"
              }`,
      }},
      // "#AA8453"
      naviconLinkActive: {
        "&:hover": {
          color: "#AA8453",
        },
      },
    }));
const UserInfoAction = (props) => {
  const { colorScheme } = useMantineColorScheme();
  const { avatar, name, email, job } = props;
  const dark = colorScheme === "dark";
  const { classes, theme } = useStyles();


  return (
    <Paper radius="md" className="flex justify-center items-center flex-col" bg={dark ? "#1B1B1B" : "white"}>
      <Avatar
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        size={120}
        radius={120}
        mb={15}
      />
      <Text textAlign="center" fontSize="lg" weight={500} marginTop="lg">
        David David
      </Text>
      <Text textAlign="center" color="dimmed" fontSize="sm" marginTop="lg" className="select-none">
        Hey everyone, I am a product manager from New York and Iam looking for
        new opportunities in the software business.
      </Text>
      <Flex className=" mt-4 cursor-pointer">
      <Group className={classes.naviconLink}  >
                <IconBrandFacebook
                  size={24}
                  strokeWidth={1}
                  className={classes.naviconLinkActive}
                />
              </Group>
              <Group className={classes.naviconLink}>
                <IconBrandTwitter
                  size={24}
                  strokeWidth={1}
                  className={classes.naviconLinkActive}
                />
              </Group>
              <Group className={classes.naviconLink} >
                <IconBrandInstagram
                  size={24}
                  strokeWidth={1}
                  className={classes.naviconLinkActive}
                />
              </Group>
      </Flex>
      {/* card  */}
      <FeaturesCards/>
    </Paper>
  );
};

export default UserInfoAction;
