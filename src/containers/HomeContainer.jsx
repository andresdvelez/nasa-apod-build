import "./HomeContainer.css";
import axios from "axios";
import { Component } from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=Iy5dgbvHwFL5D4TBrfoLNk4pGxldO2sdPCDwef3u";

class HomeContainer extends Component {
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
    console.log(data);
    return (
      <main>
        <LeftSection />
        <div className="img__container">
          <img src={data.url} alt="" />
        </div>
        <RightSection data={data.explanation} />
        <div className="pictureOfTheDate">
          <b>P</b>icture of the date: {data.date}
        </div>
      </main>
    );
  }
}

export default HomeContainer;
