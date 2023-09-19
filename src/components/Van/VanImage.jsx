import { cloneElement } from "react";

export default function VanImage({ children }) {
  children = cloneElement(children, {
    className: "van__image",
  });
  return <div className="van__image">{children}</div>;
}
