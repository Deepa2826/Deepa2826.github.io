import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactComponent as LocationIcon } from "../assets/icons/location-logo.svg";
import { ReactComponent as SocialMediaIcons } from "../assets/icons/social-media-icons.svg";
import {
  Header,
  ParentContainer,
} from "./global/CommonStyledComponents.styled";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Divider />
      {isMobile ? (
        <Box
          display="flex"
          flexDirection="row"
          gap="200px"
          padding="48px"
          justifyContent="center"
        >
          <Box display="flex" flexDirection="row" gap="16px" width="500px">
            <Box>
              <LocationIcon />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignContent="flex-start"
            >
              <Header
                variant="subtitle1"
                fontSize="16px"
                lineHeight="44px"
                style={{ textAlign: "left" }}
              >
                Singapore
              </Header>
              <Header
                variant="subtitle1"
                fontSize="16px"
                lineHeight="20px"
                style={{ textAlign: "left" }}
                flexWrap="wrap"
              >
                160 Robinson Road, #14-04, Singapore Business Federation Center,
                Singapore (068914)
              </Header>
            </Box>
          </Box>
          <Box>
            <SocialMediaIcons />
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="36px"
          padding="32px"
          maxWidth="500px"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="16px"
          >
            <Box>
              <LocationIcon />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignContent="flex-start"
            >
              <Header
                variant="subtitle1"
                fontSize="16px"
                lineHeight="44px"
                style={{ textAlign: "left" }}
              >
                Singapore
              </Header>
              <Header
                variant="subtitle1"
                fontSize="16px"
                lineHeight="20px"
                style={{ textAlign: "left" }}
                flexWrap="wrap"
              >
                160 Robinson Road, #14-04, Singapore Business Federation Center,
                Singapore (068914)
              </Header>
            </Box>
          </Box>
          <Box marginLeft="10px">
            <SocialMediaIcons />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Footer;
