import { React } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from "qs";

const Sidebar = () => {
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    const stringifedParams = qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
    return stringifedParams;
  };

  buildQueryString("sort", { price: 1 });
  return (
    <div className="sidebar">
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
      <Link
        className="sidebar-link"
        to={buildQueryString("sort", { price: 1 })}
      >
        Price:Acsending
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("sort", { price: -1 })}
      >
        Price:Decsending
      </Link>
    </div>
  );
};

export default Sidebar;
