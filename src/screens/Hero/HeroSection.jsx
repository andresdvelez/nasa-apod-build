import "./HeroSection.css";

import { dateFormat } from "../../utils/dateFormatter";
import Slider from "../../components/Slider/Slider";
import useAxios from "../../hooks/useAxios";

const HeroSection = () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

  const { loading, res } = useAxios(url);
  const { data } = !!res && res;
  const { date, hdurl } = !!data && data;

  return (
    <div className="hero-container">
      {loading ? (
        <div className="alert-loading alert-info text-center">Loading...</div>
      ) : (
        <>
          <div className="date-info">
            Picture of the Day: {dateFormat(date)}
          </div>
          <img src={hdurl} alt={`Foto de la fecha ${date}`} />
          <h2 className="movies-title">MOVIES</h2>
          <Slider />
        </>
      )}
    </div>
  );
};

export default HeroSection;
