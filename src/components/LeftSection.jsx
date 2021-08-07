import './LeftSection.css'
import { Link } from "react-router-dom";

const LeftSection = () => {
  return (
    <section>
      <ul className="left-links">
        <li>
          <Link to="/back-home">Back Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </section>
  );
};

export default LeftSection;
