import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const Container = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    padding: 20px 50px 20px 50px;
  }
`;

const Header = styled(Typography)`
  && {
    color: #444444;
    text-align: center;
  }
`;

export const ParentContainer = styled(Box)`
  && {
    width: 100vw;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 28px;
  }
`;

export { Container, Header };
