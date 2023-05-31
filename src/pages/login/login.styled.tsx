import { Box, styled, Typography, Button, TextField } from "@mui/material";
import LoginBg from "../../assets/login-bg.jpg";

export namespace S {
  export const MainContainer = styled(Box)(() => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
    height: "100vh",
  }));
  export const ContentWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
  }));
  export const ImageWrapper = styled(Box)(() => ({
    backgroundImage: `url(${LoginBg})`,
    backgroundSize: "cover",
  }));
  export const HeaderText = styled(Typography)(() => ({
    fontSize: "1.5rem",
    fontWeight: 600,
  }));
  export const CustomBtn = styled(Button)(() => ({
    textTransform: "none",
    ":hover": {
      background: "transparent",
    },
  }));
  export const LoginBtn = styled(Button)(() => ({
    textTransform: "none",
  }));
  export const SubContainer = styled(Box)(() => ({}));
  export const InputContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  }));
  export const CustomTextfield = styled(TextField)(() => ({
    width: "15rem",
  }));
}
