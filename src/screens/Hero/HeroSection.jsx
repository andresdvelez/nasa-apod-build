import "./HeroSection.css";
import axios from "axios";

import { dateFormat } from "../../utils/dateFormatter";

import Slider from "../../components/Slider/Slider";
import { useEffect, useState } from "react";

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

const HeroSection = () => {
  const [data, setData] = useState({
    date: undefined
  });

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="hero-container">
      <div className="date-info">
        Picture of the Day: {dateFormat(data.date)}
      </div>
      <img src={data.url} alt={`Foto de la fecha ${data.date}`} />
      <h2 className="movies-title">MOVIES</h2>
      <Slider data={data} />
    </div>
  );
};

export default HeroSection;
