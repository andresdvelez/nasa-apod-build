import { Link } from "react-router-dom";
import "./Slide.scss";

import useTilt from "../../hooks/useTilt";

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <Link
      to="/movie"
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideContent"
      >
        <img src={`https://image.tmdb.org/t/p/original/${slide.poster_path}`} alt="" />
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.release_date}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Slide;
