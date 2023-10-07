/* eslint-disable consistent-return */
import React, { useEffect, useState } from "react";
import "../styles/Properties.css";
import getProperties from "../requests/getProperties";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const result = await getProperties();
      setProperties(await result);
    };
    fetchProperties();
  }, []);

  const renderProperties = () => {
    let result;
    if (properties.length > 0) {
      console.log(properties);

      result = properties.map((property) => {
        return (
          <PropertyCard
            email={property.email}
            title={property.title}
            type={property.type}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            price={property.price}
            city={property.city}
          />
        );
      });
    }

    return result;
  };
  return <div className="property-grid">{renderProperties()}</div>;
};

export default Properties;
