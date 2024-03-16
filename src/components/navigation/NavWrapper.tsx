import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/footer";

import "./navWrapper.css";

const NavWrapper = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/aboutMe"}>Über mich</Link>
          </li>
          <li>
            <Link to={"/myPortfolio"}>Mein Portfolio</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default NavWrapper;
