import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Link to={"/imprint"}>[Impressum]</Link>
    </footer>
  );
};

export default Footer;
