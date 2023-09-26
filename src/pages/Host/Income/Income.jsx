import { checkIsLoggedIn, redirectToLogin } from "utils";

export function loader({ request }) {
  if (!checkIsLoggedIn()) return redirectToLogin(request);
  return null;
}

export default function Income() {
  return <h1>Income page goes here</h1>;
}
