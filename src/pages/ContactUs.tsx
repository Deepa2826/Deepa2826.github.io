import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ContactForm from "../components/contact-form/ContactForm";
import {
  Header,
  ParentContainer,
} from "../components/global/CommonStyledComponents.styled";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <ParentContainer>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="70px"
      >
        <Header
          variant="h4"
          fontSize={isMobile ? "48px" : "32px"}
          marginTop="80px"
        >
          Contact Us
        </Header>
        <ContactForm />
      </Box>
    </ParentContainer>
  );
};

export default ContactUs;
