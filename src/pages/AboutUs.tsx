import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import { Container } from "@mui/system";
import PatientValues from "../components/values/PatientValues";
import HospitalValues from "../components/values/HospitalValues";
import { fontType } from "../fonts";
import {
  Header,
  ParentContainer,
} from "../components/global/CommonStyledComponents.styled";
import Footer from "../components/Footer";

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ParentContainer>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="100px"
        justifyContent="center"
        marginTop="80px"
      >
        <PatientValues />
        <HospitalValues />
        <Header variant="subtitle1" gutterBottom={true}>
          And many more benefits!
        </Header>
      </Box>
    </ParentContainer>
  );
};

export default AboutUs;
