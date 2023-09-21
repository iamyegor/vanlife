import { useEffect, useState } from "react";

export default function useHostVans() {
  const [ hostVans, setHostVans ] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/host/vans");
      const data = await response.json();
      setHostVans(data.vans);
    })();
  }, []);

  return hostVans;
}
