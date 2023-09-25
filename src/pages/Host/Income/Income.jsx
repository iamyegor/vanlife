import { checkIsLoggedIn, redirectToLogin } from "utils/auth";

export function loader() {
  if (!checkIsLoggedIn()) return redirectToLogin();
  return null;
}

export default function Income() {
  return <h1>Income page goes here</h1>;
}
