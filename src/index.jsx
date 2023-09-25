import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "index.css";
import "server";
import About from "pages/About/About";
import Home from "pages/Home/Home";
import Vans, { loader as vansLoader } from "pages/Vans/Vans";
import VanDetail, {
  loader as vanDetailLoader,
} from "pages/VanDetail/VanDetail";
import Layout from "components/Layout";
import Host, { loader as hostLoader } from "components/Host/Host";
import Dashboard, {
  loader as dashboardLoader,
} from "pages/Host/Dashboard/Dashboard";
import Reviews, { loader as reviewsLoader } from "pages/Host/Reviews/Reviews";
import Income, { loader as incomeLoader } from "pages/Host/Income/Income";
import HostVans, {
  loader as hostVansLoader,
} from "pages/Host/HostVans/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "pages/Host/HostVanDetail/HostVanDetail";
import HostVanPhotos from "components/HostVanPhotos/HostVanPhotos";
import HostVanInfo from "components/HostVanInfo/HostVanInfo";
import HostVanPricing from "components/HostVanPricing/HostVanPricing";
import NotFound from "pages/NotFound/NotFound";
import { StrictMode } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<h1>The login page goes here</h1>} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<Host />} loader={hostLoader}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="reviews" element={<Reviews />} loader={reviewsLoader} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="photos" element={<HostVanPhotos />} />
          <Route path="pricing" element={<HostVanPricing />} />
        </Route>
        <Route path="income" element={<Income />} loader={incomeLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
