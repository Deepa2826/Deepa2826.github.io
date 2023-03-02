import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as EaseOfAccess } from "../../assets/images/ease-of-access.svg";
import { ReactComponent as ManageHealth } from "../../assets/images/manage-health.svg";
import { ReactComponent as StrongerBond } from "../../assets/images/stronger-bond.svg";
import { ReactComponent as PersonalizedCare } from "../../assets/images/personalized-care.svg";
import { ReactComponent as FlexiblePayment } from "../../assets/images/flexible-payment.svg";
import { fontType } from "../../fonts";
import {
  Header,
  ParentContainer,
} from "../global/CommonStyledComponents.styled";
import styled from "styled-components";

const PatientValues = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Header variant="h4" fontSize={isMobile ? "48px" : "32px"}>
        Our Value For Patients
      </Header>
      {isMobile ? (
        <>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box
              width="674px"
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="32px"
            >
              <EaseOfAccess />
              <Header variant="body1">
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  Ease of access
                </span>{" "}
                to all services of the hospital
              </Header>
            </Box>

            <Box
              width="674px"
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="32px"
            >
              <ManageHealth />
              <Typography color="textSecondary" fontSize="20px">
                Empowering patients to{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>manage </span>{" "}
                their health better
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box
              width="674px"
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={{ xs: "16px", sm: "16px", md: "32px" }}
            >
              <StrongerBond />
              <Typography color="textSecondary" fontSize="20px">
                Stronger{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>bond</span>{" "}
                with the hospital and care team
              </Typography>
            </Box>

            <Box
              width="674px"
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="32px"
            >
              <PersonalizedCare />
              <Typography fontSize="20px" color="textSecondary">
                Care becomes{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  personalized
                </span>
              </Typography>
            </Box>
          </Box>

          <Box
            width="674px"
            height="224px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="32px"
          >
            <FlexiblePayment />
            <Typography color="textSecondary" fontSize="20px">
              More{" "}
              <span style={{ fontFamily: `${fontType.BOLD}` }}>
                flexible payment
              </span>{" "}
              systems
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Box display="flex" width="50%" flexDirection="column" gap="32px">
            <Box
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="16px"
            >
              <EaseOfAccess />
              <Header variant="body1" fontSize="16px" lineHeight="32px">
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  Ease of access
                </span>{" "}
                to all services of the hospital
              </Header>
            </Box>

            <Box
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="16px"
            >
              <ManageHealth />
              <Header variant="body1" fontSize="16px" lineHeight="32px">
                Empowering patients to{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>manage </span>{" "}
                their health better
              </Header>
            </Box>

            <Box
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="16px"
            >
              <StrongerBond />
              <Header variant="body1" fontSize="16px" lineHeight="32px">
                Stronger{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>bond</span>{" "}
                with the hospital and care team
              </Header>
            </Box>

            <Box
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="16px"
            >
              <PersonalizedCare />
              <Header variant="body1" fontSize="16px" lineHeight="32px">
                Care becomes{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  personalized
                </span>
              </Header>
            </Box>

            <Box
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="16px"
            >
              <FlexiblePayment />
              <Header variant="body1" fontSize="16px" lineHeight="32px">
                More{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  flexible payment
                </span>{" "}
                systems
              </Header>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default PatientValues;
