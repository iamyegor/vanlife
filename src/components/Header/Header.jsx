import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <div className="header__left-nav">
          <Link to="/" className="header__nav-item">
            <h1 className="header__title">#VANLIFE</h1>
          </Link>
        </div>
        <div className="header__right-nav">
          <NavLink
            className={({ isActive }) => {
              return isActive ? "header__nav-item--active" : "";
            }}
            to="host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "header__nav-item--active" : "";
            }}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "header__nav-item--active" : "";
            }}
            to="vans"
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
