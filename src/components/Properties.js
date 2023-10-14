/* eslint-disable consistent-return */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Properties.css";
import getProperties from "../requests/getProperties";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const Properties = () => {
  const initialState = { properties: [], message: "" };
  const [message, setMessage] = useState(initialState.message);
  const [properties, setProperties] = useState(initialState.properties);
  const { search } = useLocation();

  const fetchProperties = async (query) => {
    const result = await getProperties(setMessage, query);
    setProperties(await result);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    fetchProperties(search);
  }, [search]);

  const renderProperties = () => {
    let result;

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
