import { useOutletContext } from "react-router-dom";
import "./host-van-pricing.css";

export default function HostVanPricing() {
  const { vanDetail } = useOutletContext();
  return (
    <div className="host-van-price-container">
      <span className="host-van-price">${vanDetail.price}</span>/day
    </div>
  );
}
