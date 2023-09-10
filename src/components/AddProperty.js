import "../styles/AddProperty.css";
import { useState, React } from "react";
import axios from "axios";

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
    const response = axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then(function (res) {
        console.log(res);
        return res;
      });

    console.log(response);
  };

  const handleFieldChange = (event) => {
    const inputName = event.target.name;
    const { value } = event.target;

    setFields({ ...fields, [inputName]: value });
    // console.log(inputName);
    // console.log(value);
    // console.log(fields);
  };

  return (
    <div className="addProperty">
      <form className="form" onSubmit={handleAddProperty}>
        {/* Title */}
        <label className="form-label" htmlFor="title">
          Title <br />
          <input
            type="text"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        {/* Fields */}
        <label className="form-label" htmlFor="city" value={fields}>
          City <br />
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
          Type <br />
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
          Bedrooms: <br />
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
          Bathrooms <br />
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
          email <br />
          <input
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label className="form-label" htmlFor="price">
          price: £ <br />
          <input
            type="number"
            min="0.00"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        {/* Submit button */}
        <button className="form-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
