/* eslint-disable consistent-return */
import React, { useEffect, useState } from "react";
import "../styles/Properties.css";
import getProperties from "../requests/getProperties";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const Properties = () => {
  const initialState = { properties: [], message: "" };
  const [message, setMessage] = useState(initialState.message);
  const [properties, setProperties] = useState(initialState.properties);

  console.log(properties.length);

  useEffect(() => {
    const fetchProperties = async () => {
      const result = await getProperties(setMessage);
      setProperties(await result);
    };
    fetchProperties();
  }, []);

  const renderProperties = () => {
    let result;
    console.log(properties);
    console.log(message);

    if (properties.length > 0) {
      result = properties.map((property) => {
        return <PropertyCard key={property._id} {...property} />;
      });
    }

    return result;
  };
  return (
    <>
      {message.length > 0 && <Alert message={message} isSuccess={false} />}
      <div className="property-grid">{renderProperties()}</div>
    </>
  );
};

export default Properties;
