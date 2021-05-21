import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./Pages/Landing";
import Leaderboard from "./Pages/Leaderboard";
import Marks from "./Pages/Marks";
import Alert from "./components/Alert";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <>
            <Navbar />
            <Route exact path="/marks" component={Marks} />
            <Route exact path="/leaderboard" component={Leaderboard} />
          </>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
