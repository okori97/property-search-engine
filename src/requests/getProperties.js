import axios from "axios";

export default function getProperties(setMessage, query) {
  if (query) {
    return axios
      .get(`http://localhost:4000/api/v1/PropertyListing${query}`)
      .then((response) => {
        const propertyResults = response.data;
        setMessage("");

        if (propertyResults.length === 0) {
          setMessage(`Could not find anything'`);
        }
        return propertyResults;
      })
      .catch((error) => {
        console.error(error);
        setMessage("Server down. Please try again later.");
        return error;
      });
  }

  return axios
    .get(`http://localhost:4000/api/v1/PropertyListing`)
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
