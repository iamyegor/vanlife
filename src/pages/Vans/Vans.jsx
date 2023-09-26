import "./vans.css";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "api";
import Van from "components/Van/index";
import classNames from "classnames";
import React from "react";
import Error from "components/Error/Error";

export function loader() {
  return defer({ vansPromise: getVans() });
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const loaderData = useLoaderData();

  function renderVans(vans) {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const vansElements = displayedVans.map((van) => {
      return (
        <Link
          state={{ searchParams: `?${searchParams.toString()}` }}
          onClick={() => cacheVan(van)}
          key={van.id}
          to={van.id}
        >
          <Van>
            <Van.Image>
              <img src={van.imageUrl} />
            </Van.Image>
            <Van.InfoSection>
              <div className="van__info-top">
                <Van.Name>{van.name}</Van.Name>
                <Van.Type>{van.type}</Van.Type>
              </div>
              <Van.DailyPrice>{van.price}</Van.DailyPrice>
            </Van.InfoSection>
          </Van>
        </Link>
      );
    });

    return (
      <>
        <div className="van-filters">
          <button
            onClick={() => setSearchParams({ type: "rugged" })}
            className={getFilterClasses("rugged")}
          >
            rugged
          </button>
          <button
            onClick={() => setSearchParams({ type: "simple" })}
            className={getFilterClasses("simple")}
          >
            simple
          </button>
          <button
            onClick={() => setSearchParams({ type: "luxury" })}
            className={getFilterClasses("luxury")}
          >
            luxury
          </button>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="van-filter__item"
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="vans">{vansElements}</div>
      </>
    );
  }

  function getFilterClasses(type) {
    return classNames(
      "van-filter__item",
      type === typeFilter && `van-filter__item--${type}`
    );
  }

  function cacheVan(van) {
    localStorage.setItem(`van`, JSON.stringify(van));
  }

  return (
    <div className="vans-container">
      <h1 className="explore-vans">Explore our van options </h1>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await errorElement={<Error />} resolve={loaderData.vansPromise}>
          {(vans) => renderVans(vans)}
        </Await>
      </React.Suspense>
    </div>
  );
}
