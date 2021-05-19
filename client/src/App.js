import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Leaderboard from "./Pages/Leaderboard";
import Marks from "./Pages/Marks";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/marks" component={Marks} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Switch>
    </Router>
  );
}

export default App;
