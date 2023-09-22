import useVanDetail from "hooks/useVanDetail";
import { Outlet, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./host-van-detail.css";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

export default function HostVanDetail() {
  const { id } = useParams();
  const vanDetail = useVanDetail(id);

  function getLinkClasses(isActive) {
    console.log(isActive);
    return classNames(
      "host-van-detail__option",
      isActive ? "host-van-detail__option--active underlined-text" : ""
    );
  }

  return (
    <div className="host-van-detail">
      {vanDetail ? (
        <>
          <Link
            to=".."
            relative="path"
            className="host-van-detail__back-to-vans"
          >
            <AiOutlineArrowLeft className="host-van-detail__back-to-vans-img" />
            <div className="host-van-detail__back-to-vans-text underlined-text">
              Back to all vans
            </div>
          </Link>
          <div className="host-van-detail__van">
            <div className="host-van-detail__top-section">
              <img className="host-van-detail__img" src={vanDetail.imageUrl} />
              <div className="host-van-detail__upper-right-section">
                <div
                  className={`host-van-detail__type host-van-detail__type--${vanDetail.type}`}
                >
                  {vanDetail.type}
                </div>
                <h1 className="host-van-detail__name">{vanDetail.name}</h1>
                <div className="host-van-detail__price-a-day">
                  <span className="host-van-detail__price">
                    ${vanDetail.price}
                  </span>
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
            <Outlet context={{ vanDetail }} />
          </div>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}
