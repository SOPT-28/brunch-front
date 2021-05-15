import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main, Search } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route path="/">404 not Found</Route>
      </Switch>
    </Router>
  );
};

export default App;
