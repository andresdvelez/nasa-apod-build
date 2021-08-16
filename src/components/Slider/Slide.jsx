import { Link } from "react-router-dom";
import "./Slide.scss";

import useTilt from "../../hooks/useTilt";
import { checkImage } from "../../utils/validatorIfEmpty";

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <Link
      to={`/movies/detail/${slide.id}`}
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div className="slideContent">
        <div className="img-container">
          <img src={checkImage(slide.poster_path)} alt={slide.title} />
        </div>
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.release_date}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Slide;
