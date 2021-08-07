import axios from "axios";
import { Component } from "react";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=Iy5dgbvHwFL5D4TBrfoLNk4pGxldO2sdPCDwef3u";

class HomeContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
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
      const img = this.state.data
      console.log(img)
    return <main>
        <img src={img.url} alt="" />
        <div className="img_info">
            {img.explanation}
        </div>
    </main>;
  }
}

export default HomeContainer;
