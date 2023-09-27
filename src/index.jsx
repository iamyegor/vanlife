import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "index.css";
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
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./components/Login/Login";
import Error from "components/Error/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<Host />} loader={hostLoader}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="reviews" element={<Reviews />} loader={reviewsLoader} />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
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
root.render(<App />);
