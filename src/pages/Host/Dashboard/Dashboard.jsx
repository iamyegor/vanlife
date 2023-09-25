import { checkIsLoggedIn, redirectToLogin } from "utils";

export function loader() {
  if (!checkIsLoggedIn()) return redirectToLogin();
  return null;
}

export default function Dashboard() {
  return <h1>Dashboard page goes here</h1>;
}
