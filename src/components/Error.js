import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>❌❌ Oops!! ❌❌</h1>
      <h3>Status Code: {err.status}</h3>
      <h3>Message: {err.error.message}</h3>
    </div>
  );
};
export default Error;
