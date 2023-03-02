import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/Poppins/Poppins-Italic.ttf";
import { fontType } from "./fonts";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    text: {
      primary: "#444444",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: fontType.LIGHT,
    h4: {
      fontSize: "40px",
      color: "textPrimary",
    },
    body1: {
      fontFamily: fontType.REGULAR,
      fontSize: "20px",
      color: "textSecondary",
      lineHeight: "56px",
    },
    subtitle1: {
      fontFamily: fontType.LIGHT,
      fontSize: "24px",
      color: "textSecondary",
      lineHeight: "40px",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
