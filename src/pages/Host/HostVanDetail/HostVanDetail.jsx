import useVanDetail from "hooks/useVanDetail";
import { useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./HostVanDetail.css";
import { Link } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const vanDetail = useVanDetail(id);

  return (
    <div className="host-van-detail">
      {vanDetail ? (
        <>
          <Link to="/host/vans" className="host-van-detail__back-to-vans">
            <AiOutlineArrowLeft className="host-van-detail__back-to-vans-img" />
            <div
              to="/host/vans"
              className="host-van-detail__back-to-vans-text underlined-text"
            >
              Back to all vans
            </div>
          </Link>
          <div className="host-van-detail__van">
            <div className="host-van-detail__top-section">
              <img className="host-van-detail__img" src={vanDetail.imageUrl} />
              <div className="host-van-detail__upper-right-section">
                <div
                  className={`host-van-detail__type host-van-detail__type--${vanDetail.type}`}
                >
                  {vanDetail.type}
                </div>
                <h1 className="host-van-detail__name">{vanDetail.name}</h1>
                <div className="host-van-detail__price-a-day">
                  <span className="host-van-detail__price">
                    ${vanDetail.price}
                  </span>
                  /day
                </div>
              </div>
            </div>
            <div className="host-van-detail__midle-bar">
              <div
                className="host-van-detail__option 
                host-van-detail__option--active 
                underlined-text"
              >
                Details
              </div>
              <div className="host-van-detail__option">Pricing</div>
              <div className="host-van-detail__option">Photos</div>
            </div>
            <div className="host-van-detail__details">
              <div className="host-van-detail__detail-item">
                <span className="host-van-detail__key">Name: </span>
                <span className="host-van-detail__value">{vanDetail.name}</span>
              </div>
              <div className="host-van-detail__detail-item">
                <span className="host-van-detail__key">Category: </span>
                <span className="host-van-detail__value">{vanDetail.type}</span>
              </div>
              <div className="host-van-detail__detail-item">
                <span className="host-van-detail__key">Description: </span>
                <span className="host-van-detail__value">
                  {vanDetail.description}
                </span>
              </div>
              <div className="host-van-detail__detail-item">
                <span className="host-van-detail__key">Visibility: </span>
                <span className="host-van-detail__value">public</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}
