import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Host.css";
import classNames from "classnames";

export default function Host() {
  function getLinkClasses(isActive) {
    return classNames(
      "host__nav-item",
      isActive ? "host__nav-item--active" : ""
    );
  }

  return (
    <div className="host">
      <div className="host__navigation">
        <NavLink
          to="/host/"
          className={({ isActive }) => getLinkClasses(isActive)}
        >
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => getLinkClasses(isActive)}
        >
          <span>Income</span>
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({ isActive }) => getLinkClasses(isActive)}
        >
          <span>Vans</span>
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => getLinkClasses(isActive)}
        >
          <span>Reviews</span>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
