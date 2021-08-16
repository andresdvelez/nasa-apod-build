import "./Slider.scss";
import { useReducer } from "react";
import axios from "axios";

import Slide from "./Slide";
import { useEffect, useState } from "react";
import { slidesReducer } from "../../reducer/slidesReducer";

const initialState = {
  slideIndex: 0
};

const Slider = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  const [slides, setSlides] = useState([]);
  let unmounted = false

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=77e65c0891516ee117c6954c49c2997e&language=en-US&page=1&include_adult=false&query=nasa",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2U2NWMwODkxNTE2ZWUxMTdjNjk1NGM0OWMyOTk3ZSIsInN1YiI6IjYxMTNkNzgyNWM1NjM0MDA1ZGFlOTMzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4bI-pTdMNGdSFj_iPrQrSNpXjsvcZwY6drBC95r_KTI",
          },
        }
      )
      .then((res) => {
        if (!unmounted) {
          setSlides(res.data.results);
          initialState.slides = slides;
        }
      })
      .catch((error) => console.log(error));

      return () => {
        unmounted = true
      }
  }, [slides]);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
      {[...slides,...slides, ...slides].map((slide, i) => { 
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
};



export default Slider;
