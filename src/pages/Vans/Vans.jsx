import {
  Link,
  useSearchParams,
  NavLink,
  useLoaderData,
  redirect,
} from "react-router-dom";
import "./Vans.css";
import Van from "components/Van/index";
import classNames from "classnames";
import { getVans } from "api";

export async function loader() {
  return await getVans();
}

export default function Vans() {
  const vans = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
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
      <div className="van-filters">
        <NavLink to="?type=rugged" className={getFilterClasses("rugged")}>
          rugged
        </NavLink>
        <NavLink to="?type=simple" className={getFilterClasses("simple")}>
          simple
        </NavLink>
        <NavLink to="?type=luxury" className={getFilterClasses("luxury")}>
          luxury
        </NavLink>
        {typeFilter && (
          <NavLink to="." className="van-filter__item">
            Clear filter
          </NavLink>
        )}
      </div>
      <div className="vans">{vansElements}</div>
    </div>
  );
}
