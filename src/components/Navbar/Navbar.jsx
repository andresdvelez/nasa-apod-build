import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="navbar__logo" to="/">
          <img
            src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
            alt=""
          />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
