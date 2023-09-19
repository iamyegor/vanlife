import { useEffect, useState } from "react";
import Van from "../components/Van/index";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVans(data.vans);
    })();
  }, []);

  const vansElements = vans.map((van) => {
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
      <div className="vans">{vansElements}</div>
    </div>
  );
}
