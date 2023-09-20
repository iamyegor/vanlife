import { Outlet } from "react-router-dom";
import "../styles/host.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Host() {
  const [hostOption, setHostOption] = useState("dashboard");

  return (
    <div className="host">
      <div className="host__navigation">
        <Link to="/host" onClick={() => setHostOption("dashboard")}>
          <span
            className={`host__navigation-item ${
              hostOption === "dashboard" ? "host__navigation-item--active" : ""
            }`}
          >
            Dashboard
          </span>
        </Link>
        <Link to="/host/income" onClick={() => setHostOption("income")}>
          <span
            className={`host__navigation-item ${
              hostOption === "income" ? "host__navigation-item--active" : ""
            }`}
          >
            Income
          </span>
        </Link>
        <Link to="/host/vans" onClick={() => setHostOption("vans")}>
          <span
            className={`host__navigation-item ${
              hostOption === "vans" ? "host__navigation-item--active" : ""
            }`}
          >
            Vans
          </span>
        </Link>
        <Link to="/host/reviews" onClick={() => setHostOption("reviews")}>
          <span
            className={`host__navigation-item ${
              hostOption === "reviews" ? "host__navigation-item--active" : ""
            }`}
          >
            Reviews
          </span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
