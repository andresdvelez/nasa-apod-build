import "./HeroSection.css";
import axios from "axios";
import { Component } from "react";

import Slider from "../../components/Slider/Slider";
import { dateFormat } from "../../utils/dateFormatter";

const url =
  `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`

class HeroSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch(console.log);
  }

  render() {
    const data = this.state.data;
    return (
      <div className="hero-container">
        <div className="date-info">
          Picture of the Day: {dateFormat(data.date)}
        </div>
        <img src={data.url} alt={`Foto de la fecha ${data.date}`} />
        <Slider data={data} />
      </div>
    );
  }
}

export default HeroSection;
