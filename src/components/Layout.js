import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Layout({ children, heading }) {
  return (
    <Container>
      <header>
        <AppBar position="fixed">
          <Container>
            <Toolbar disableGutters style={{ position: "relaitve" }}>
              <a
                href="https://www.spacex.com/"
                target="blank"
                style={{ position: "absolute", left: 0 }}
              >
                {" "}
                <img
                  src="/images/SpaceX-Logo.svg"
                  width={120}
                  height={80}
                  alt="space-x logo"
                />
              </a>
              <Typography
                variant="h5"
                component="h1"
                style={{ margin: "auto" }}
              >
                {heading}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <main style={{ marginTop: "6rem" }}>{children}</main>
    </Container>
  );
}
