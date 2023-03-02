import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as WorldClassHealthExperience } from "../../assets/images/world-class-health-ex.svg";
import { ReactComponent as RevenueStreams } from "../../assets/images/revenue-streams.svg";
import { ReactComponent as HospitalOutreach } from "../../assets/images/hospital-outreach.svg";
import { ReactComponent as Campaigns } from "../../assets/images/campaigns.svg";
import { ReactComponent as PatientFeedback } from "../../assets/images/patient-feedback.svg";
import { Header } from "../global/CommonStyledComponents.styled";
import { fontType } from "../../fonts";

const HospitalValues = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Header variant="h4" fontSize={isMobile ? "48px" : "32px"}>
        Our Value For Hospitals
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
              gap={{ xs: "16px", sm: "16px", md: "32px" }}
            >
              <WorldClassHealthExperience />

              <Header variant="body1">
                Provide
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  {" "}
                  world-class{" "}
                </span>
                digital health experiences for your patients
              </Header>
            </Box>

            <Box
              width="674px"
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <RevenueStreams />
              <Header variant="body1">
                Add{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  revenue streams{" "}
                </span>
                to your operations
              </Header>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ sm: "column", xs: "column", md: "row", lg: "row" }}
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
              <HospitalOutreach />
              <Header variant="body1">
                Expand your hospital’s{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  outreach{" "}
                </span>
                via digital channels
              </Header>
            </Box>

            <Box
              width="674px"
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={{ xs: "16px", sm: "16px", md: "32px" }}
            >
              <Campaigns />
              <Header variant="body1">
                Launch large scale{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  campaigns{" "}
                </span>
              </Header>
            </Box>
          </Box>
          <Box
            width="674px"
            height="224px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={{ xs: "16px", sm: "16px", md: "32px" }}
          >
            <PatientFeedback />
            <Header variant="body1">
              Effectively collect patient{" "}
              <span style={{ fontFamily: `${fontType.BOLD}` }}>feedback </span>{" "}
              and improve your services
            </Header>
          </Box>
        </>
      ) : (
        <>
          <Box display="flex" width="50%" flexDirection="column" gap="40px">
            <Box
              height="224px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="16px"
            >
              <WorldClassHealthExperience />

              <Header variant="body1" fontSize="16px" lineHeight="32px">
                Provide
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  {" "}
                  world-class{" "}
                </span>
                digital health experiences for your patients
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
              <RevenueStreams />
              <Header variant="body1" fontSize="16px" lineHeight="32px">
                Add{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  revenue streams{" "}
                </span>
                to your operations
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
              <HospitalOutreach />
              <Header variant="body1" fontSize="16px" lineHeight="32px">
                Expand your hospital’s{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  outreach{" "}
                </span>
                via digital channels
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
              <Campaigns />
              <Header variant="body1" fontSize="16px" lineHeight="32px">
                Launch large scale{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  campaigns{" "}
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
              <PatientFeedback />
              <Header variant="body1" fontSize="16px" lineHeight="32px">
                Effectively collect patient{" "}
                <span style={{ fontFamily: `${fontType.BOLD}` }}>
                  feedback{" "}
                </span>{" "}
                and improve your services
              </Header>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default HospitalValues;
