export const slidesReducer = (state, event) => {
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % state.slides.length,
      };
    }
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? state.slides.length - 1 : state.slideIndex - 1,
      };
    }
  };