import { useAsyncError } from "react-router-dom";

export default function Error() {
  const error = useAsyncError();
  return <h2>{error.message}</h2>;
}
