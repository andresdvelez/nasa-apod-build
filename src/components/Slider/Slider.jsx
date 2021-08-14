import "./Slider.scss";
import { useReducer } from "react";
import axios from "axios";

import Slide from "./Slide";
import { useEffect, useState } from "react";

const initialState = {
  slideIndex: 0,
  slides: []
};

const Slider = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  const [slides, setSlides] = useState([]);

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
        setSlides(res.data.results);
        initialState.slides = slides;
      })
      .catch((error) => console.log(error));
  }, [slides]);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % state.slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? state.slides.length - 1 : state.slideIndex - 1,
    };
  }
};

export default Slider;
