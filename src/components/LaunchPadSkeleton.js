import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

export default function LaunchPadSkeleton() {
  return (
    <div style={{ display: "flex" }}>
      <Stack spacing={3} p={2}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Skeleton variant="text" height={50} animation="wave" width="50%" />
          <Skeleton
            variant="circular"
            width="15%"
            height={30}
            style={{ marginLeft: "1rem" }}
            animation="wave"
          />
        </Box>

        <Skeleton
          variant="rectangular"
          width={320}
          height={300}
          animation="wave"
        />
      </Stack>
      <Stack spacing={1} p={2}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Skeleton variant="text" height={50} animation="wave" width="50%" />
          <Skeleton
            variant="circular"
            width="15%"
            height={30}
            style={{ marginLeft: "1rem" }}
            animation="wave"
          />
        </Box>

        <Skeleton
          variant="rectangular"
          width={320}
          height={300}
          animation="wave"
        />
      </Stack>
      <Stack spacing={1} p={2}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Skeleton variant="text" height={50} animation="wave" width="50%" />
          <Skeleton
            variant="circular"
            width="15%"
            height={30}
            style={{ marginLeft: "1rem" }}
            animation="wave"
          />
        </Box>

        <Skeleton
          variant="rectangular"
          width={320}
          height={300}
          animation="wave"
        />
      </Stack>
    </div>
  );
}
