import axios from "axios";

export default function getProperties() {
  return axios
    .get("http://localhost:4000/api/v1/PropertyListing")
    .then((response) => {
      const propertyResults = response.data;
      return propertyResults;
    })
    .catch((error) => {
      console.log(error);
    });
}
