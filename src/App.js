import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
            <Route exact path='/' component={HeroSection} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
