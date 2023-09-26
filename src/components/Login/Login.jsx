import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../../api";
import { redirectTo } from "../../utils";
import "./login.css";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email && !password)
    return "You should fill the email and password fields";

  const redirectPath =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    await loginUser({ email, password });
    localStorage.setItem("loggedIn", "true");
    return redirectTo(redirectPath);
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const error = useActionData();
  const message = useLoaderData();
  const { state } = useNavigation();

  return (
    <div className="form-container">
      <Form method="post" className="form">
        <h1 className="form__title">Log in</h1>
        {error && <h3 className="form__error">{error}</h3>}
        {!error && message && <h3 className="form__message">{message}</h3>}
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
        <button disabled={state === "submitting"} className="form__button">
          {state === "submitting" ? "Loggin in... " : "Log in"}
        </button>
      </Form>
    </div>
  );
}
