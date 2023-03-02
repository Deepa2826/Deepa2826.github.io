import { useState } from "react";
import { postContactFormDetails } from "../services/api";

interface IContactFormFields {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  country: string;
  phoneNumber: string;
  jobTitle?: string;
  message: string;
  formSubmitted?: boolean;
  success?: boolean;
}

const initialFormValues: IContactFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  country: "",
  phoneNumber: "",
  jobTitle: "",
  message: "",
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("firstName" in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This field is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    if ("country" in fieldValues)
      temp.country = fieldValues.country ? "" : "This field is required.";

    if ("message" in fieldValues)
      temp.message = fieldValues.message ? "" : "This field is required.";

    if ("phoneNumber" in fieldValues) {
      temp.message = fieldValues.phoneNumber ? "" : "This field is required.";
      if (fieldValues.phoneNumber)
        temp.phoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(
          fieldValues.phoneNumber
        )
          ? ""
          : "Contact Number is not valid.";
    }

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
    delete values?.formSubmitted;
    delete values?.success;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (formIsValid()) {
      console.log("values", values);
      values.phoneNumber = "0000";
      console.log("values", values);
      try {
        const response = await postContactFormDetails(JSON.stringify(values));
        if (response.status === 200) alert("Forms saved successfully");

        setValues(initialFormValues);
        window.location.reload();
      } catch (e) {
        alert("Please fill the required fields");
      }
    }
    setValues(initialFormValues);
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.firstName &&
      fieldValues.lastName &&
      fieldValues.email &&
      fieldValues.phoneNumber &&
      fieldValues.companyName &&
      fieldValues.country &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  };
};
