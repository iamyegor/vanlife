import { checkIsLoggedIn, redirectToLogin } from "utils";

export function loader({ request }) {
  if (!checkIsLoggedIn()) return redirectToLogin({ request });
  return null;
}

export default function Reviews() {
  return <h1>Reviews page goes here</h1>;
}
