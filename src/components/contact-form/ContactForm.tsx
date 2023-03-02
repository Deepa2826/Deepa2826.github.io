import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useFormControls } from "./useFormControls";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const BlackBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: #000000;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #000000;
    }
  }
`;

const inputFieldValues = [
  {
    name: "firstName",
    label: "First Name",
    id: "my-name",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    id: "my-name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
    required: true,
  },
  {
    name: "phoneNumber",
    label: "Contact Number",
    id: "my-phoneNo",
    required: true,
  },
  {
    name: "companyName",
    label: "Company Name",
    id: "my-company-name",
    required: true,
  },
  {
    name: "country",
    label: "Country/Region",
    id: "my-country",
    required: true,
  },
  {
    name: "jobTitle",
    label: "Job Title",
    id: "my-jobTitle",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    required: true,
    rows: 5,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      background: "rgb(255, 255, 255)",
      borderRadius: "16px",
    },
  },
}));

const ContactForm = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        width="100%"
        display="flex"
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <Box width={isMobile ? "500px" : "300px"}>
          <form onSubmit={handleFormSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              gap="20px"
              justifyContent="center"
              alignItems="center"
            >
              {inputFieldValues.map((inputFieldValue, index) => {
                return (
                  <BlackBorderTextField
                    key={index}
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                    name={inputFieldValue.name}
                    label={inputFieldValue.label}
                    required={inputFieldValue.required ?? false}
                    multiline={inputFieldValue.multiline ?? false}
                    rows={inputFieldValue.rows ?? 1}
                    autoComplete="none"
                    fullWidth
                    {...(errors[inputFieldValue.name] && {
                      error: true,
                      helperText: errors[inputFieldValue.name],
                    })}
                  />
                );
              })}
              <Button
                type="submit"
                disabled={!formIsValid()}
                variant="outlined"
                sx={{
                  color: "grey",
                  borderRadius: "44px",
                  border: "1px solid grey",
                  width: "200px",
                  height: "50px",
                  textTransform: "none",
                  fontSize: "16px",
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
