import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Mission from "./Mission";
import Platform from "./Platform";

const HomePage = () => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Platform />
        <AboutUs />
        <ContactUs />
        <Mission />
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;
