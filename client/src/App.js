import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./Pages/Landing";
import Leaderboard from "./Pages/Leaderboard";
import Marks from "./Pages/Marks";
import Alert from "./components/Alert";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <div className="app-container">
            <Navbar />
            <Route exact path="/marks" component={Marks} />
            <Route exact path="/leaderboard" component={Leaderboard} />
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
