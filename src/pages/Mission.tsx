import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import { Container } from "@mui/system";

import { ReactComponent as StripeIcon } from "../assets/images/stripe-icon.svg";
import { ReactComponent as AWSIcon } from "../assets/images/aws-icon.svg";
import { fontType } from "../fonts";
import {
  Header,
  ParentContainer,
} from "../components/global/CommonStyledComponents.styled";

const Mission = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ParentContainer>
      <Box
        width="80%"
        display="flex"
        flexDirection="column"
        gap="32px"
        justifyContent="center"
      >
        <Header
          variant="h4"
          fontSize={isMobile ? "48px" : "32px"}
          margin="70px 0px 70px 0px"
        >
          Our mission
        </Header>
        <Stack direction="column" spacing={5}>
          <Header
            variant="subtitle1"
            gutterBottom={true}
            fontSize={isMobile ? "24px" : "20px"}
          >
            Digital engagement with patients is becoming paramount for the
            success of hospitals; patients as modern consumers are seeking
            individualised healthcare experiences in the form of m-health
            applications.
          </Header>

          <Header
            variant="subtitle1"
            gutterBottom={true}
            fontSize={isMobile ? "24px" : "20px"}
          >
            Our mission is to empower healthcare organisations to provide these
            experiences, better satisfying patients and garnering their loyalty,
            becoming 'future- proof'.
          </Header>

          <Header
            variant="subtitle1"
            gutterBottom={true}
            fontSize={isMobile ? "24px" : "20px"}
          >
            With an integrated clinical and administrative web interface, we
            also provide a highly scalable and flexible platform that ensures a
            seamless collaborative experience between all stakeholders, enabling
            hospitals to make data-driven clinical and operational decisions.
          </Header>
        </Stack>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop="44px"
        >
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginBottom="44px"
            >
              <Header variant="h4" fontSize={isMobile ? "48px" : "32px"}>
                Our partners
              </Header>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-start"
              gap={isMobile ? "72px" : "32px"}
              marginBottom="44px"
            >
              <StripeIcon
                width={isMobile ? "100%" : "100px"}
                height={isMobile ? "100%" : "100px"}
              />
              <AWSIcon
                width={isMobile ? "100%" : "100px"}
                height={isMobile ? "100%" : "100px"}
              />
            </Box>
          </Box>
          <Box display="flex" flexWrap="wrap">
            <Stack direction="column" spacing={5}>
              <Header
                variant="subtitle1"
                gutterBottom={true}
                fontSize={isMobile ? "24px" : "20px"}
              >
                We have partnered with industry leading companies in our mission
                to deliver cutting edge products and create seamless experiences
                for patients and hospitals.
              </Header>
              <Header
                variant="subtitle1"
                gutterBottom={true}
                fontSize={isMobile ? "24px" : "20px"}
              >
                We have partnered with industry leading companies in our mission
                to deliver cutting edge products and create seamless experiences
                for patients and hospitals.
              </Header>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ParentContainer>
  );
};

export default Mission;
