import { redirect } from "react-router-dom";

export function checkIsLoggedIn() {
  return true;
}

export function redirectToLogin() {
  const response = redirect("/login");
  response.body = true;
  return response;
}
