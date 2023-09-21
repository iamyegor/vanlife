import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "index.css";
import "server";
import About from "pages/About/About";
import Home from "pages/Home/Home";
import Vans from "pages/Vans/Vans";
import VanDetail from "pages/VanDetail/VanDetail";
import Layout from "components/Layout";
import Host from "components/Host/Host";
import Dashboard from "pages/Host/Dashboard/Dashboard";
import Reviews from "pages/Host/Reviews/Reviews";
import Income from "pages/Host/Income/Income";
import HostVans from "pages/Host/HostVans/HostVans";
import HostVanDetail from "pages/Host/HostVanDetail/HostVanDetail";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>    
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<Host />}>
          <Route index element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetail />} />
          <Route path="income" element={<Income />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
