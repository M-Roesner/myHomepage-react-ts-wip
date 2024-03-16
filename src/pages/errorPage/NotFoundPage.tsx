import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2">
      Error: 404 Page Not Found
      <br />
      <Link to="/">Zur Hauptseite</Link>
    </div>
  );
}
