import { Await, Outlet, defer, useLoaderData } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./host-van-detail.css";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { getHostVanDetail } from "api";
import { checkIsLoggedIn, redirectToLogin } from "utils";
import React from "react";

export async function loader({ params, request }) {
  if (!checkIsLoggedIn()) return redirectToLogin(request);
  return defer({ hostVanDetailPromise: getHostVanDetail(params.id) });
}

export default function HostVanDetail() {
  const loaderData = useLoaderData();

  function getLinkClasses(isActive) {
    return classNames(
      "host-van-detail__option",
      isActive ? "host-van-detail__option--active underlined-text" : ""
    );
  }

  function renderHostVanDetail(van) {
    return (
      <div className="host-van-detail__van">
        <div className="host-van-detail__top-section">
          <img className="host-van-detail__img" src={van.imageUrl} />
          <div className="host-van-detail__upper-right-section">
            <div
              className={`host-van-detail__type host-van-detail__type--${van.type}`}
            >
              {van.type}
            </div>
            <h1 className="host-van-detail__name">{van.name}</h1>
            <div className="host-van-detail__price-a-day">
              <span className="host-van-detail__price">${van.price}</span>
              /day
            </div>
          </div>
        </div>
        <div className="host-van-detail__midle-bar">
          <NavLink
            to="."
            end
            className={({ isActive }) => getLinkClasses(isActive)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => getLinkClasses(isActive)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => getLinkClasses(isActive)}
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={{ vanDetail: van }} />
      </div>
    );
  }

  return (
    <div className="host-van-detail">
      <Link to=".." relative="path" className="host-van-detail__back-to-vans">
        <AiOutlineArrowLeft className="host-van-detail__back-to-vans-img" />
        <div className="host-van-detail__back-to-vans-text underlined-text">
          Back to all vans
        </div>
      </Link>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderData.hostVanDetailPromise}>
          {(hostVanDetail) => renderHostVanDetail(hostVanDetail)}
        </Await>
      </React.Suspense>
    </div>
  );
}
