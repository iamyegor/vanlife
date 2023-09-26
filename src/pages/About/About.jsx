import chillingOnVan from "../../assets/chilling-on-van.jpg";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img className="about__image" src={chillingOnVan} />
      <div className="about__info">
        <h1 className="about__tagline">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <div className="about__desc">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </div>
        <div className="about__desc">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </div>
        <div className="about__explore-section">
          <h2 className="about__van-ready">
            Your destination is waiting. <br />
            Your van is ready.
          </h2>
          <Link to="/vans" className="about__explore-vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}
