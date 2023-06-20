import { Grid, Paper, useMantineColorScheme } from "@mantine/core";

import CardContainer from "../components/CardContainer";
import Layout from "../components/Layout";
import CalendarContainer from "../components/CalendarContainer";
import GraphContainer from "../components/GraphContainer";
import ReviewContainer from "../components/ReviewContainer";
import Footer from "../components/Footer";

const Dashboard = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Layout>
      <div
        className={` ${
          dark ? "bg-bgDark" : "bg-bgLight"
        } min-h-screen overflow-x-hidden pt-10 sm:px-5 px-1`}
      >
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
