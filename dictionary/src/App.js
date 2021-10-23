import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/screens/Home";
import Thesaurus from "../src/screens/Thesaurus";
import NotFound from "./screens/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/thesaurus">
          <Thesaurus />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
