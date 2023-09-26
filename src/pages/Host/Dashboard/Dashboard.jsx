import { checkIsLoggedIn, redirectToLogin } from "utils";

export function loader({ request }) {
  if (!checkIsLoggedIn()) return redirectToLogin(request);
  return null;
}

export default function Dashboard() {
  return <h1>Dashboard page goes here</h1>;
}
