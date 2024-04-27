import {
  Link,
  // , useRouteError
} from "react-router-dom";

export default function NotFoundPage() {
  // TODO: Types for react router and adding error handling
  // npm i --save @types/react-router
  // npm i --save @types/react-router-dom
  // const error = useRouteError();
  // console.error(error);
  return (
    <div className="flex flex-col gap-2">
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
      Error: 404 Page Not Found
      <br />
      <Link to="/">Zur Hauptseite</Link>
    </div>
  );
}
