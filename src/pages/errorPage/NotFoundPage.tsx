import { Link, useRouteError } from "react-router-dom";

type ErrorProps = {
  statusText?: string;
  message?: string;
  status?: number | string;
  data?: string;
  internal?: boolean;
  error?: {
    message?: string;
    stack?: string;
  };
};
export default function NotFoundPage() {
  // TODO: Types for react router and adding error handling
  // Added my own typing for handling the error that I know.
  // npm i --save @types/react-router
  // npm i --save @types/react-router-dom
  const error = useRouteError() as ErrorProps;
  console.error(error);
  return (
    <div className="flex flex-col gap-2">
      {error.status && <p>{`status: '${error.status}'`}</p>}
      {error.statusText && <p>{`statusText: '${error.statusText}'`}</p>}
      {/* {error.data && <p>{`data: '${error.data}'`}</p>} */}
      {error?.error?.message && <p>{`message: '${error.error.message}'`}</p>}
      <br />
      <Link to="/">Zur Hauptseite</Link>
    </div>
  );
}
