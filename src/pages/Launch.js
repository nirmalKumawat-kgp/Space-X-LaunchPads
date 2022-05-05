import { Box, Typography, Grid, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../utils/baseURL";
import Styles from "./Launch.module.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Layout from "../components/Layout";
export default function Launch() {
  document.title = "SpaceX | Launch";
  const { id } = useParams();
  const navigate = useNavigate();
  const [launch, setLaunch] = useState(null);
  const [reused, setReused] = useState(null);
  const fetchLaunchDetails = async () => {
    const { data } = await API.get(`v5/launches/${id}`);
    return data;
  };
  const handleBack = () => {
    navigate("/");
  };
  useEffect(() => {
    fetchLaunchDetails().then((data) => {
      setReused(data.cores[0].reused);
      setLaunch(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout heading="Launch">
      <Box className={Styles.launchContainer}>
        <Box className={Styles.launchHeading}>
          <ArrowBackIosRoundedIcon
            onClick={handleBack}
            style={{ cursor: "pointer" }}
          />
          <Typography variant="h5" ml={2}>
            {launch && launch.name}
          </Typography>
        </Box>
        <Box mt={3}>
          {launch ? (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <iframe
                  src={`https://www.youtube.com/embed/${launch?.links?.youtube_id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={Styles.youtubePlayer}
                ></iframe>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4">{launch.name}</Typography>
                <Typography variant="subtitle1">
                  - &nbsp;
                  {new Date(launch.static_fire_date_unix).toDateString()}
                </Typography>
                <Typography
                  variant="body2"
                  pt={2}
                  color={launch.details ? "inherit" : "error"}
                >
                  {launch.details ? launch.details : "No details to show"}
                </Typography>
                <Typography variant="body2" mt={2}>
                  Reused : {launch && reused.toString()}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <LinearProgress />
          )}
        </Box>
      </Box>
    </Layout>
  );
}
