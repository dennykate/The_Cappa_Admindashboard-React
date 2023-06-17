import { Grid, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import DataCard from "../components/DataCard";

const Dashboard = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);

  return (
    <Layout>
      <div
        className={` ${
          dark ? "bg-bgDark" : "bg-bgLight"
        } min-h-screen overflow-x-hidden py-10 px-5`}
      >
        <Grid>
          {[0, 1, 2, 3]?.map((data) => (
            <DataCard key={data} />
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default Dashboard;
