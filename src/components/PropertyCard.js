/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "../styles/PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faEnvelope,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";

const bedIcon = <FontAwesomeIcon icon={faBed} />;
const bathIcon = <FontAwesomeIcon icon={faBath} />;
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const poundIcon = <FontAwesomeIcon icon={faSterlingSign} />;

const PropertyCard = (prop) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = prop;

  return (
    <div className="property-card">
      <div className="property-card-image" />
      <div className="property-card-title">{title}</div>
      <div className="property-card-text">
        {type} - {city}
      </div>
      <div className="property-card-metadata">
        {bedIcon}
        {bedrooms}
      </div>
      <div className="property-card-metadata">
        {bathIcon}
        {bathrooms}
      </div>
      <div className="property-card-metadata">
        {poundIcon}
        {price}
      </div>
      <button className="property-card-button" type="button">
        <a href={email}>Email {mailIcon}</a>
      </button>
    </div>
  );
};

export default PropertyCard;
