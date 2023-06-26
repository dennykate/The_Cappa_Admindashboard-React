import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Overview from "./components/Dashboard/Overview";
import Chart from "./components/Dashboard/Chart";
import Calendar from "./components/Dashboard/Calendar";
import RoomList from "./components/List/RoomList";
import ConciergeList from "./components/List/ConciergeList";
import Review from "./components/List/Review";
import GuestList from "./components/List/GuestList";
import Addnews from "./components/News/Addnews";
import Allnews from "./components/News/Allnews";
import Allmenu from "./components/Management/Allmenu";
import Addmenu from "./components/Management/Addmenu";
import Editmenu from "./components/Management/Editmenu";
import AddRoom from "./components/Management/AddRoom";
import EditRoom from "./components/Management/EditRoom";
import AllFacilities from "./components/Management/AllFacilities";
import AllRoom from "./components/Management/AllRoom";
import AllServices from "./components/Management/AllServices";
import EditServices from "./components/Management/EditServices";
import AddServices from "./components/Management/AddServices";
import AddTeamLeader from "./components/Department/AddTeamLeader";
import Teamleader from "./components/Department/Teamleader";
import EditTeamLeader from "./components/Department/EditTeamLeader";
import EditFacilities from "./components/Management/EditFacilities";
import AddFacilities from "./components/Management/AddFacilities";
import AddBooking from "./pages/AddBooking";
import EditBooking from "./components/Management/EditBooking";
import AllBooking from "./components/Management/AllBooking";
import SettingProfile from "./pages/SettingProfile";

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
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: "Barlow, sans-serif",
          // breakpoints: {
          //   xs: "30em",
          //   sm: "48em",
          //   md: "64em",
          //   lg: "74em",
          //   xl: "90em",
          // },
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard/overview"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setting" element={<SettingProfile />} />
          {/* Dashboard  */}
          <Route path="/dashboard/overview" element={<Dashboard />} />
          <Route path="/dashboard/chart" element={<Chart />} />
          <Route path="/dashboard/calendar" element={<Calendar />} />
          {/* List  */}
          <Route path="/list/room-list" element={<RoomList />} />
          <Route path="/list/guest-list" element={<GuestList />} />
          <Route path="/list/concierge-list" element={<ConciergeList />} />
          <Route path="/list/review-list" element={<Review />} />
          {/* Department  */}
          <Route path="/department/team-leader" element={<Teamleader />} />
          <Route
            path="/department/add-teamleader"
            element={<AddTeamLeader />}
          />
          <Route path="/department/edit-teamleader" element={<EditTeamLeader />} />
          {/* Management  */}
          {/* Booking  */}
          <Route path="/management/all-booking" element={<AllBooking />} />
          <Route path="/management/add-booking" element={<AddBooking />} />
          <Route path="/management/edit-booking" element={<EditBooking />} />
          {/* Room & Suite  */}
          <Route path="/management/all-rooms" element={<AllRoom />} />
          <Route path="/management/add-rooms" element={<AddRoom />} />
          <Route path="/management/edit-rooms" element={<EditRoom />} />
          {/* Services  */}
          <Route path="/management/all-services" element={<AllServices />} />
          <Route path="/management/add-services" element={<AddServices />} />
          <Route path="/management/edit-services" element={<EditServices />} />
          {/* Facilities  */}
          <Route
            path="/management/all-facilities"
            element={<AllFacilities />}
          />
          <Route
            path="/management/add-facilities"
            element={<AddFacilities />}
          />
          <Route
            path="/management/edit-facilities"
            element={<EditFacilities />}
          />
          {/* Restaurant Menu  */}
          <Route path="/management/all-menu" element={<Allmenu />} />
          <Route path="/management/add-menu" element={<Addmenu />} />
          <Route path="/management/edit-menu" element={<Editmenu />} />
          {/* News  */}
          <Route path="/news/all-news" element={<Allnews />} />
          <Route path="/news/add-news" element={<Addnews />} />
          <Route path="/news/edit-news" element={<AllBooking />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
