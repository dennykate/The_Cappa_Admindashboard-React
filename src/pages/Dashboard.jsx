import { Grid, Paper, useMantineColorScheme } from "@mantine/core";

import CardContainer from "../components/CardContainer";
import Layout from "../components/Layout";
import CalendarContainer from "../components/CalendarContainer";
import GraphContainer from "../components/GraphContainer";
import ReviewContainer from "../components/ReviewContainer";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Dashboard = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    localStorage.setItem("lastRoute", "Overview");
    localStorage.setItem("lastMenuSelect", 0);
  }, []);

  return (
    <Layout>
      <div className={`  pt-10 sm:px-5 px-1`}>
        <CardContainer dark={dark} />
        <Grid mt={10} gutter={20}>
          <CalendarContainer dark={dark} />
          <GraphContainer dark={dark} />
        </Grid>
        <ReviewContainer dark={dark} />
        <Footer dark={dark} />
      </div>
    </Layout>
  );
};

export default Dashboard;
