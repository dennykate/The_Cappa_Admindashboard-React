import React from "react";
import { Route, Routes } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllBooking from "./pages/AllBooking";
import AddBooking from "./pages/AddBooking";
import AddRoom from "./pages/AddRoom";

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
      <MantineProvider theme={{ colorScheme }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all-booking" element={<AllBooking />} />
          <Route path="/add-booking" element={<AddBooking />} />
          <Route path="/add-room" element={<AddRoom />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
