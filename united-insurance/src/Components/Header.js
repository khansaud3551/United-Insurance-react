import React from "react";
import { UserIcon } from "@heroicons/react/outline";
import "./Header.css";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid bg-white shadow-sm header_style">
      <div className="row  justify-content-center align-items-center py-md-1 px-md-3 h-100">
        <div className="col-3 d-flex align-items-center h-100">
          <img src="/assets/logo-2.png" alt="" className="header_logo" />
          {/* <Image src="/assets/logo-2.png" layout="fill" objectFit="contain" /> */}
        </div>
        <div className="col-7 ">
          <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center gap-4  font_500">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cats">Travel Insurance</Link>
            </li>
            <li>
              <Link to="/sheeps">Health Insurance</Link>
            </li>
            <li>
              <Link to="/goats">Motor Insurance</Link>
            </li>
            <li>
              <Link to="/goats">Motor Renewa</Link>
            </li>
            <li>
              <Link to="/goats">Policy Renewal</Link>
            </li>
          </ul>
        </div>
        <div className="col-2 d-flex justify-content-end ">
          <p
            className="m-0 d-flex align-items-center gap-2 font_600 "
            style={{ color: "var(--green)" }}
          >
            <UserIcon height="16px" />
            Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
