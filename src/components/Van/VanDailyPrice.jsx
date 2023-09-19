import { cloneElement } from "react";

export default function VanDailyPrice({ children }) {
  return (
    <div>
      <span className="van__price">${children}</span> / day
    </div>
  );
}
