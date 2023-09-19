import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "../styles/header/header.css";
import "../styles/index.css";
import "../styles/footer/footer.css";

export default function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <nav className="header__navigation">
          <div className="header__left-nav">
            <Link to="/" className="header__nav-item">
              <h1 className="header__title">#VANLIFE</h1>
            </Link>
          </div>
          <div className="header__right-nav">
            <Link className="header__nav-item" to="/about">
              About
            </Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <footer className="footer">Ⓒ 2022 #VANLIFE</footer>
    </BrowserRouter>
  );
}
