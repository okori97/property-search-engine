import React from "react";
import "../styles/AddProperty.css";
import { useState } from "react";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    const inputName = event.target.name;
    const { value } = event.target;

    setFields({ ...fields, [inputName]: value });
    console.log(inputName);
    console.log(value);
    console.log(fields);
  };

  return (
    <div className="addProperty">
      <form className="form" onSubmit={handleAddProperty}>
        {/* Title */}
        <label className="form-label" htmlFor="title">
          Title <br></br>
          <input
            type="text"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        {/* City */}
        <label className="form-label" value={fields}>
          City <br></br>
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label className="form-label" htmlFor="type">
          Type <br></br>
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label className="form-label" htmlFor="bedrooms">
          Bedrooms: <br></br>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="1"
          />
        </label>
        <label className="form-label" htmlFor="bathrooms">
          Bathrooms <br></br>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="1"
          />
        </label>
        <label className="form-label" htmlFor="email">
          email <br></br>
          <input
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label className="form-label" htmlFor="price">
          price: £ <br></br>
          <input
            type="number"
            min="0.01"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>

        <button className="form-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
