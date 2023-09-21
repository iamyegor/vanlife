import { useEffect, useState } from "react";

export default function useVanDetail(id) {
  const [vanDetail, setVanDetail] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/host/vans/${id}`);
      const data = await response.json();
      setVanDetail(data.vans[0]);
    })();
  }, []);

  return vanDetail;
}
