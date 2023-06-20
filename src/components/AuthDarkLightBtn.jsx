import { useMantineTheme } from "@mantine/styles";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import React from "react";

const AuthDarkLightBtn = ({ toggleColorScheme, dark }) => {
  const theme = useMantineTheme();
  return (
    <button
      onClick={() => toggleColorScheme()}
      className={`w-9 h-9 rounded-full border ${
        dark
          ? "border-[#F8F5F0] border-opacity-40 bg-[#222222]"
          : "border-[#222222] border-opacity-40 bg-[#F8F5F0]"
      } flex justify-center items-center`}
    >
      {dark ? (
        <IconSun color={theme.colors.yellow[4]} size={19} />
      ) : (
        <IconMoonStars color={theme.colors.yellow[4]} size={19} />
      )}
    </button>
  );
};

export default AuthDarkLightBtn;
