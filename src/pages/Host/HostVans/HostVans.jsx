import "./HostVans.css";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "api";
import { checkIsLoggedIn, redirectToLogin } from "utils";

export async function loader() {
  if (!checkIsLoggedIn()) return redirectToLogin();
  return await getHostVans();
}

export default function HostVans() {
  const hostVans = useLoaderData();

  const hostVansElements = hostVans.map((van) => {
    return (
      <Link key={van.id} to={van.id}>
        <div className="host-vans__van">
          <img className="host-vans__van-image" src={van.imageUrl} />
          <div className="host-vans__van-info-section">
            <h3 className="host-vans__van-name">{van.name}</h3>
            <div className="host-vans__van-price">${van.price}/day</div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="host-vans">
      <h1 className="host-vans__title">Your listed vans</h1>
      {hostVansElements.length > 0 ? (
        hostVansElements
      ) : (
        <span className="loading">Loading...</span>
      )}
    </div>
  );
}