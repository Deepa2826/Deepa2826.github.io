import { Box } from "@mui/material";
import { fontType } from "../../fonts";
import { Header } from "../global/CommonStyledComponents.styled";
import { ReactComponent as WorldClassHealthExperience } from "../../assets/images/world-class-health-ex.svg";
import { ReactComponent as RevenueStreams } from "../../assets/images/revenue-streams.svg";
import { ReactComponent as HospitalOutreach } from "../../assets/images/hospital-outreach.svg";
import { ReactComponent as Campaigns } from "../../assets/images/campaigns.svg";
import { ReactComponent as PatientFeedback } from "../../assets/images/patient-feedback.svg";

export const WorldClassHealthExperienceComponent = () => {
  return (
    <Box
      width="674px"
      height="224px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <WorldClassHealthExperience />
      <Header variant="body1">
        Provide
        <span style={{ fontFamily: `${fontType.BOLD}` }}> world-class </span>
        digital health experiences for your patients
      </Header>
    </Box>
  );
};

export const RevenueStreamsComponent = () => {
  return (
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
        <span style={{ fontFamily: `${fontType.BOLD}` }}>revenue streams </span>
        to your operations
      </Header>
    </Box>
  );
};

export const HospitalOutreachComponent = () => {
  return (
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
        <span style={{ fontFamily: `${fontType.BOLD}` }}>outreach </span>
        via digital channels
      </Header>
    </Box>
  );
};
