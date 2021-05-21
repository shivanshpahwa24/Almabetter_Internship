import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Leaderboard from "./Pages/Leaderboard";
import Marks from "./Pages/Marks";
import Alert from "./components/Alert";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Alert />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/marks" component={Marks} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
