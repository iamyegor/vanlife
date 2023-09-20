import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import About from "pages/About/About";
import Home from "pages/Home/Home";
import Vans from "pages/Vans/Vans";
import VanDetail from "pages/VanDetail/VanDetail";
import Layout from "components/Layout";
import Host from "components/Host/Host";
import Dashboard from "pages/Host/Dashboard/Dashboard";
import Reviews from "pages/Host/Reviews/Reviews";
import Income from "pages/Host/Income/Income";
import "index.css";
import "server";

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
          <Route path="host" element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="income" element={<Income />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
