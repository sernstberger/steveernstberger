import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SalaryCalculator from "./components/SalaryCalculator";
import Header from "./components/Header";
import Home from "./pages/Home";
import PPN from "./projects/Vemo/PPN";

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/income-calculator">
            <SalaryCalculator />
          </Route>
          <Route path="/Vemo">
            <PPN />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
