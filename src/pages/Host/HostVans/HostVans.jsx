import "./host-vans.css";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "api";
import { checkIsLoggedIn, redirectToLogin } from "utils";
import React from "react";

export async function loader({ request }) {
  if (!checkIsLoggedIn()) return redirectToLogin(request);
  return defer({ hostVansPromise: getHostVans() });
}

export default function HostVans() {
  const loaderData = useLoaderData();

  function renderHostVans(hostVans) {
    return hostVans.map((van) => {
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
  }

  return (
    <div className="host-vans">
      <h1 className="host-vans__title">Your listed vans</h1>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderData.hostVansPromise}>
          {(hostVans) => renderHostVans(hostVans)}
        </Await>
      </React.Suspense>
    </div>
  );
}
