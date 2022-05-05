import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./LaunchPad.module.css";
export default function LaunchPad({ launchPad }) {
  document.title = "SpaceX | LaunchPads";
  const navigate = useNavigate();
  const handleLaunchClick = (launchId) => {
    navigate(`/launch/${launchId}`);
  };
  const getChipColor = () => {
    switch (launchPad.status) {
      case "retired":
        return "error";
      case "active":
        return "success";
      default:
        return "primary";
    }
  };
  const color = getChipColor();

  return (
    <Grid item xs={12} sm={6} md={4} className={Styles.launchPadContainer}>
      <Paper sx={{ p: 2 }} elevation={3} className={Styles.launchPadPaper}>
        <Typography variant="h5" className={Styles.launchPadHeading}>
          {launchPad.name}
          <Chip
            label={launchPad.status}
            color={color}
            variant="filled"
            sx={{ marginLeft: "1rem" }}
          />
        </Typography>
        <Box className={Styles.launchPadDetails}>
          <Typography variant="body2" className={Styles.launchPadDescription}>
            {launchPad.details.length > 250
              ? launchPad.details.toString().slice(0, 250) + " ....."
              : launchPad.details}
          </Typography>
          <Typography variant="body2" className={Styles.launchPadComplete}>
            {launchPad.details}{" "}
          </Typography>
        </Box>
        <Box className={Styles.launchPadLaunches}>
          {launchPad && launchPad.launches.length ? (
            <List
              component="nav"
              aria-label="launches"
              className={Styles.lauchesList}
            >
              {launchPad.launches.slice(0, 3).map((launch, index) => (
                <>
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleLaunchClick(launch)}
                  >
                    <ListItemText
                      primary={launch.toString()}
                      sx={{ fontFamily: "Lato" }}
                    />
                  </ListItem>
                  {index === 2 ? "" : <Divider />}
                </>
              ))}
            </List>
          ) : (
            <Typography
              variant="body1"
              color="error"
              sx={{ textAlign: "center", fontFamily: "Lato" }}
            >
              {" "}
              No Launch Available
            </Typography>
          )}
        </Box>
      </Paper>
    </Grid>
  );
}
