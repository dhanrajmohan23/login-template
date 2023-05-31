import { Box, styled } from "@mui/material";

export namespace S {
  export const MainContainer = styled(Box)(() => ({
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "85vw",
  }));
}
