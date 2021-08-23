import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";

// screen
import HeroSection from "./screens/Hero/HeroSection";
import MovieDetails from "./screens/MovieDetails/MovieDetails";


const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
          <Route exact path="/" component={HeroSection} />
          <Route path='/movies/detail/:id' component={MovieDetails} />
      </main>
    </Router>
  );
};

export default App;
