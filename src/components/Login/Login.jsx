import { Form, redirect, useActionData } from "react-router-dom";
import { loginUser } from "../../api";
import { redirectTo } from "../../utils";
import "./login.css";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    await loginUser({ email, password });
    localStorage.setItem("loggedIn", "true");
    return redirectTo("/host");
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const error = useActionData();
  return (
    <div className="form-container">
      <Form method="post" className="form">
        <h1 className="form__title">Log in</h1>
        {error && <h3 className="form__error">{error}</h3>}
        <input
          className="form__email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="form__password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="form__button">Log in</button>
      </Form>
    </div>
  );
}
