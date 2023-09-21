import { Link, useSearchParams } from "react-router-dom";
import "./Vans.css";
import Van from "components/Van/index";
import useVans from "hooks/useVans";

export default function Vans() {
  const vans = useVans();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElements = displayedVans.map((van) => {
    return (
      <Link onClick={() => cacheVan(van)} key={van.id} to={`/vans/${van.id}`}>
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

  function cacheVan(van) {
    localStorage.setItem(`van`, JSON.stringify(van));
  }

  return (
    <div>
      <h1 className="explore-vans">Explore our van options </h1>
      <div className="van-filters">
        <Link
          to="?type=rugged"
          className="van-filter__item van-filter__item--rugged"
        >
          rugged
        </Link>
        <Link
          to="?type=simple"
          className="van-filter__item van-filter__item--simple"
        >
          simple
        </Link>
        <Link
          to="?type=luxury"
          className="van-filter__item van-filter__item--luxury"
        >
          luxury
        </Link>
        <Link to=".">Clear filter</Link>
      </div>
      <div className="vans">{vansElements}</div>
    </div>
  );
}
