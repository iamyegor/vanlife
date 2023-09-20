import "./Home.css";
import thumbnail from "../../assets/home-img.png";

export default function Home() {
  return (
    <div className="home">
      <main className="home__content">
        <h1 className="home__tagline">You got travel plans, we got travel vans</h1>
        <div className="home__description">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</div>
        <button className="home__find-van">Find your plan</button>
      </main>
      <img className="home__picture" src={thumbnail} />
    </div>
  );
}
