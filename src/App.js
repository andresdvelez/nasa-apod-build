import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";

// screen
import HeroSection from "./screens/Hero/HeroSection";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HeroSection} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
