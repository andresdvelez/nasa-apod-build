import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-logo" to="/">
          <img
            src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
            alt=""
          />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
