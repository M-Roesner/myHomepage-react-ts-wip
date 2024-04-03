import { Link } from "react-router-dom";

const NavWrapper = () => {
  return (
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
  );
};

export default NavWrapper;
