import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Host.css";
import classNames from "classnames";
import { checkIsLoggedIn, redirectToLogin } from "utils";

export function loader({ request }) {
  if (!checkIsLoggedIn()) return redirectToLogin(request);
  return null;
}

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
          to="/host"
          end
          className={({ isActive }) => getLinkClasses(isActive)}
        >
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => getLinkClasses(isActive)}
        >
          <span>Income</span>
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => getLinkClasses(isActive)}
        >
          <span>Vans</span>
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => getLinkClasses(isActive)}
        >
          <span>Reviews</span>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
