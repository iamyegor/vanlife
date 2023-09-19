import { useEffect, useState } from "react";
import Van from "../components/Van/index";
import { nanoid } from "nanoid";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/api/vans");
      setVans(JSON.parse(data._bodyText).vans);
    })();
  }, []);

  const vansElements = vans.map((van) => {
    return (
      <Van key={nanoid()}>
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
    );
  });

  return <div className="vans">{vansElements}</div>;
}
