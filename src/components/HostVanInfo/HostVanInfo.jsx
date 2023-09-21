import "./host-van-info.css";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { vanDetail } = useOutletContext();

  return (
    <div className="host-van-info__details">
      <div className="host-van-info__detail-item">
        <span className="host-van-info__key">Name: </span>
        <span className="host-van-info__value">{vanDetail.name}</span>
      </div>
      <div className="host-van-info__detail-item">
        <span className="host-van-info__key">Category: </span>
        <span className="host-van-info__value">{vanDetail.type}</span>
      </div>
      <div className="host-van-info__detail-item">
        <span className="host-van-info__key">Description: </span>
        <span className="host-van-info__value">{vanDetail.description}</span>
      </div>
      <div className="host-van-info__detail-item">
        <span className="host-van-info__key">Visibility: </span>
        <span className="host-van-info__value">public</span>
      </div>
    </div>
  );
}
