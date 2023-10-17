import { React, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from "qs";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;
const Sidebar = () => {
  const initialState = {
    searchQuery: "",
  };

  const [searchQuery, setSearchQuery] = useState(initialState.searchQuery);
  const { search } = useLocation();
  const navigate = useNavigate();

  const handleFieldChange = (event) => {
    const { value } = event.target;
    console.log(value);

    setSearchQuery(value);
  };

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    const stringifedParams = qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
    return stringifedParams;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchQuery);
    const newQuery = buildQueryString("query", {
      title: { $regex: searchQuery },
    });
    navigate(`/${newQuery}`);
  };

  return (
    <div className="sidebar">
      <form className="sidebar-search-form" onSubmit={handleSearch}>
        <input type="search" onChange={handleFieldChange} />
        <button type="submit">{searchIcon}</button>
      </form>
      <span>Filter by city</span>
      <Link className="sidebar-link" to={`/?query={"city":"Leeds"}`}>
        Leeds
      </Link>
      <Link className="sidebar-link" to={`/?query={"city":"Manchester"}`}>
        Manchester
      </Link>
      <Link className="sidebar-link" to={`/?query={"city":"Sheffield"}`}>
        Sheffield
      </Link>
      <Link className="sidebar-link" to={`/?query={"city":"Liverpool"}`}>
        Liverpool
      </Link>
      <span>Sort By</span>
      <Link
        className="sidebar-link"
        to={buildQueryString("sort", { price: 1 })}
      >
        Price: Acsending
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("sort", { price: -1 })}
      >
        Price: Decsending
      </Link>
    </div>
  );
};

export default Sidebar;
