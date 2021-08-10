import "./HeroSection.css";
import axios from "axios";
import { Component } from "react";
import Slider from "../Slider/Slider";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=Iy5dgbvHwFL5D4TBrfoLNk4pGxldO2sdPCDwef3u";

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
          {`Picture of the day: ${data.date}`}
        </div>
        <img src={data.url} alt={`Foto de la fecha ${data.date}`} />
        <Slider data={data} />
      </div>
    );
  }
}

export default HeroSection;
