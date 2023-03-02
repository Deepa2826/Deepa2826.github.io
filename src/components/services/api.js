export const postContactFormDetails = async (payload) => {
  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apidog/1.0.0 (https://www.apidog.com)");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: payload,
    redirect: "follow",
  };

  const response = await fetch(
    "https://axc9dicp38.execute-api.ap-south-1.amazonaws.com/contact",
    requestOptions
  );

  return response;
};
