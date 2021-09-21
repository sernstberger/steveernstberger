import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import vemoTheme from "../theme";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

const PPN = () => {
  const { path } = useRouteMatch();

  return (
    <ThemeProvider theme={vemoTheme}>
      <Switch>
        <Route path={path} exact>
          <SignIn />
        </Route>
        <Route path={`${path}/dashboard`}>
          <Dashboard />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default PPN;
