import { useState, useEffect } from "react";

export default function useVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVans(data.vans);
    })();
  }, []);

  return vans;
}
