import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { API } from "../utils/baseURL";
import LaunchPad from "../components/LaunchPad";
import Layout from "../components/Layout";
import LaunchPadSkeleton from "../components/LaunchPadSkeleton";
export default function LaunchPads() {
  const [launchPads, setLaunchPads] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLaunchPads = async () => {
    const { data } = await API.get("v4/launchpads");

    return data;
  };
  useEffect(() => {
    fetchLaunchPads().then((launchPadData) => {
      setLaunchPads(launchPadData);
      setLoading(false);
    });
  }, []);
  return (
    // <ThemeProvider theme={darkTheme}>
    <Layout heading="Launch Pad">
      <Grid container spacing={3} marginTop={10}>
        {!loading ? (
          launchPads.map((launchPad, index) => (
            <LaunchPad launchPad={launchPad} key={index} />
          ))
        ) : (
          <LaunchPadSkeleton />
        )}
      </Grid>
    </Layout>
    // </ThemeProvider>
  );
}
