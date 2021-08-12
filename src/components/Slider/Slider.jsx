import './Slider.scss'
import { useReducer } from "react";

import Slide from "./Slide";

const slides = [
  {
    title: "Mercurio",
    subtitle: "Solar system",
    description: "Adventure is never far away",
    image: "https://www.lanasa.net/application/files/3616/2809/2914/miniatura_Starliner040821jpg.jpg",
  },
  {
    title: "Marte",
    subtitle: "Solar system",
    description: "Let your dreams come true",
    image: "https://www.lanasa.net/application/files/3616/2809/2914/miniatura_Starliner040821jpg.jpg",
  },
  {
    title: "Mercury",
    subtitle: "Solar system",
    description: "Adventure is never far away",
    image: "https://www.lanasa.net/application/files/3616/2809/2914/miniatura_Starliner040821jpg.jpg",
  },
  {
    title: "Mart",
    subtitle: "Solar system",
    description: "Let your dreams come true",
    image: "https://www.lanasa.net/application/files/3616/2809/2914/miniatura_Starliner040821jpg.jpg",
  },
];

const initialState = {
  slideIndex: 2,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

const Slider = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

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
}

export default Slider;