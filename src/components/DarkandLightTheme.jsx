import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useEffect } from "react";

export function ActionToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // useEffect(() => {
  //   console.log(colorScheme);
  // }, [colorScheme]);

  return (
    <Group position="center" my="xxl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          borderRadius: theme.radius.lg,

          color:
            theme.colorScheme === "dark"
              ? theme.colors.yellow[5]
              : theme.colors.yellow[5],
        })}
      >
        {colorScheme === "dark" ? (
          <IconSun size="1.5rem" />
        ) : (
          <IconMoonStars size="1.5rem" />
        )}
      </ActionIcon>
    </Group>
  );
}
