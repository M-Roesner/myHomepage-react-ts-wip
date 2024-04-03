import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to={"/imprint"}>[Impressum]</Link>
    </footer>
  );
};

export default Footer;
