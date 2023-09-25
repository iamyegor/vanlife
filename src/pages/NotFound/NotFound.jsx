import "./not-found.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h1 className="not-found__text">
          Sorry, the page you were looking for was not found
        </h1>
        <Link to="/" className="not-found__button">
          Return to home
        </Link>
      </div>
    </div>
  );
}
