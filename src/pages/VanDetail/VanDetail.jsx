import {
  useParams,
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./van-detail.css";
import { getVanDetail } from "api";
import React from "react";

export async function loader({ params }) {
  return defer({ vanPromise: getVanDetail(params.id) });
}

export default function VanDetail() {
  const { state } = useLocation();
  const searchParams = state?.searchParams || "";

  const loaderData = useLoaderData();

  function renderVan(van) {
    return (
      <div className="van-detail">
        <img src={van.imageUrl} />
        <h2>{van.name}</h2>
        <div className="van-detail__top-info">
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <i className={`van-detail__type van__type--${van.type} selected`}>
            {van.type}
          </i>
        </div>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    );
  }

  return (
    <div className="van-detail-container">
      <div className="van-detail__link-container">
        <Link
          to={`../${searchParams}`}
          relative="path"
          className="van-detail__back-to-vans"
        >
          <AiOutlineArrowLeft className="van-detail__back-to-vans-img" />
          <div className="van-detail__back-to-vans-text underlined-text">
            Back to all vans
          </div>
        </Link>
      </div>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderData.vanPromise}>{(van) => renderVan(van)}</Await>
      </React.Suspense>
    </div>
  );
}
