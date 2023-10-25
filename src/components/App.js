import "../styles/App.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React, useState } from "react";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Sidebar from "./Sidebar";

const App = () => {
  const initialState = { userid: "" };
  const [userid, setuserID] = useState(initialState);

  const handleLogin = (response) => {
    console.log(response);
    const { userID } = response;
    return setuserID({ ...initialState, userid: userID });
  };

  const handleLogout = () => {
    const { FB } = window;
    console.log(FB);
    return FB.logout(() => {
      setuserID({ ...initialState, userid: "" });
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar onLogin={handleLogin} userID={userid} onLogout={handleLogout} />
        <div className="page-content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Properties />} />
            <Route path="/add-property" element={<AddProperty />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
