import React from "react";
import "../styles/PropertyCard.css";

const PropertyCard = (prop) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = prop;

  return (
    <div className="property-card">
      <p>
        `${bedrooms} bedroom ${type} property`
      </p>
      <p>
        `${type} - ${city}`
      </p>
      <p>` ${bedrooms}`</p>
      <p>`${bathrooms}`</p>
      <p>`${price}`</p>
      <button className="property-card-button" type="button">
        <a href={email}></a>
      </button>
    </div>
  );
};

export default PropertyCard;
