import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MantineProvider
      theme={{
        fontFamily: "Barlow, sans-serif",
      }}
    >
      <App />
    </MantineProvider>
  </BrowserRouter>
);
