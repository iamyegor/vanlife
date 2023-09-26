import { redirect } from "react-router-dom";

export function checkIsLoggedIn() {
  return JSON.parse(localStorage.getItem("loggedIn")) || false;
}

export function redirectToLogin(request) {
  const pathname = new URL(request.url).pathname;
  return redirectTo(
    `/login?message=You must log in first&redirectTo=${pathname}`
  );
}

export function redirectTo(route) {
  const response = redirect(route);
  response.body = true;
  return response;
}
