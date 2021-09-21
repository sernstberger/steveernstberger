import { Container } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SalaryCalculator from "./components/SalaryCalculator";
import Header from "./components/Header";
import Home from "./pages/Home";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="lg">
        <div>
          <Switch>
            <Route path="/income-calculator">
              <SalaryCalculator />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}
