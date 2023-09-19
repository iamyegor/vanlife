import classNames from "classnames";

export default function VanType({ children }) {
  const allClasses = classNames(
    "van__type",
    `van__type--${children.toString().toLowerCase()}`
  );
  return <div className={allClasses}>{children}</div>;
}
