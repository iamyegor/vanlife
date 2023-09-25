import { checkIsLoggedIn, redirectToLogin } from "utils";

export function loader() {
  if (!checkIsLoggedIn()) return redirectToLogin();
  return null;
}

export default function Reviews() {
  return <h1>Reviews page goes here</h1>;
}
