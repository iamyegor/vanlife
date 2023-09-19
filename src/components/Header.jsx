import React from "react";
import { Link } from "react-router-dom";

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
          <Link className="header__nav-item" to="/about">
            About
          </Link>

          <Link className="header__nav-item" to="/vans">
            Vans
          </Link>
        </div>
      </nav>
    </header>
  );
}
