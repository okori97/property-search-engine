import { React } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from "qs";

const Sidebar = () => {
  const currentQs = useLocation().search;

  const buildQueryString = (operation, valueObj) => {
    const qString = qs.parse(currentQs, { ignoreQueryPrefix: true });
    const newQs = { ...qString, [operation]: valueObj };
    const result = qs.stringify(newQs, { addQueryPrefix: true, encode: false });
    return result;
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
