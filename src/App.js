import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Containers
import HomeContainer from "./containers/HomeContainer";

//Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
