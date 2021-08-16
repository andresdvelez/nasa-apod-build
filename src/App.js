import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Switch>
          <Route exact path="/" component={HeroSection} />
          <Route path='/movies/detail/:id' component={MovieDetails} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
