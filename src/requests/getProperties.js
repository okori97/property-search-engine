import axios from "axios";

export default function getProperties(setMessage) {
  return axios
    .get("http://localhost:4000/api/v1/PropertyListing")
    .then((response) => {
      const propertyResults = response.data;
      setMessage("");
      return propertyResults;
    })
    .catch((error) => {
      console.log(error);
      setMessage("Server down. Please try again later.");
      return error;
    });
}
