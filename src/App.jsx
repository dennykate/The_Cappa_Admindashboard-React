import React from "react";
import { Route, Routes } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";

import Dashboard from "./pages/Dashboard";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ColorSchemeProvider>
  );
};

export default App;
