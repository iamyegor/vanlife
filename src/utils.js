import { redirect } from "react-router-dom";

export function checkIsLoggedIn() {
  return JSON.parse(localStorage.getItem("loggedIn")) || false;
}

export function redirectToLogin() {
  const response = redirect("/login");
  response.body = true;
  return response;
}

export function redirectTo(route) {
  const response = redirect(route);
  response.body = true;
  return response;
}
