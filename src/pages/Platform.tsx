import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import {
  Header,
  ParentContainer,
} from "../components/global/CommonStyledComponents.styled";
import "../index.css";

const Platform = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  var MobileAppImage = require("../assets/images/mobile-page-image.png");
  const [showMoreSections, setShowMoreSections] = useState(false);

  return (
    <ParentContainer>
      <Box
        width="90%"
        display="flex"
        flexDirection="column"
        gap="32px"
        justifyContent="center"
      >
        <Header
          variant="h4"
          marginTop={isMobile ? "80px" : "40px"}
          fontSize={isMobile ? "48px" : "32px"}
        >
          The new generation of patient engagement
        </Header>
        <Header variant="subtitle1" fontSize={isMobile ? "24px" : "20px"}>
          A B2B SaaS mobile application that enables healthcare organisations to
          provide high-quality digital health experiences
        </Header>
        <Box display="flex" justifyContent="center">
          <img
            src={MobileAppImage}
            width={isMobile ? "30%" : "50%"}
            // height={isMobile ? "20%" : "40%"}
          />
        </Box>

        <Box display="flex" justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              color: "grey",
              borderRadius: "44px",
              border: "1px solid grey",
              width: "200px",
              textTransform: "none",
            }}
          >
            See More
          </Button>
        </Box>
      </Box>
    </ParentContainer>
  );
};

export default Platform;
