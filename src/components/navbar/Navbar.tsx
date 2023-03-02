import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as NovocurisLogo } from "../../assets/images/novocuris-logo.svg";
import { fontType } from "../../fonts";
import styled from "styled-components";

const LogoContainer = styled(Box)`
  && {
    display: flex;
    align-items: center;
    justify-self: flex-start;
  }
`;

const NavContainer = styled(Box)`
  && {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
`;

const StyledLinks = styled(Link)`
  && {
    font-family: ${fontType.MEDIUM};
    color: #444444;
    font-size: 0.9em;
    cursor: pointer;
    textdecoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "white" }} elevation={2}>
        <Toolbar
          sx={{
            mx: "auto",
          }}
        >
          <LogoContainer>
            <a href="/">
              <NovocurisLogo cursor="pointer" />
            </a>
          </LogoContainer>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={isMobile ? "32px" : "24px"}
          >
            <StyledLinks to="/platform">PLATFORM</StyledLinks>
            <StyledLinks to="/about">ABOUT US</StyledLinks>
            <StyledLinks to="/contact">CONTACT</StyledLinks>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
