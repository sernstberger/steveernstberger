import { useHistory } from "react-router-dom";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AuthenticatedPage from "../../../../componentLibrary/AuthenticatedPage";

// const Background = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   minHeight: "calc(100vh - 64px)",
// }));

const Dashboard = () => {
  const history = useHistory();
  return (
    <AuthenticatedPage
      sidebarItems={[
        {
          title: "foo",
          url: "/",
          icon: <DashboardIcon />,
        },
        {
          title: "bar",
          url: "/",
          icon: <DashboardIcon />,
        },
        {
          title: "baz",
          url: "/",
          icon: <DashboardIcon />,
        },
      ]}
    >
      <Typography variant="h1">Welcome, Steve!</Typography>
      <div>Plaid</div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h1">Sign in</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h1">Sign in</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h1">Sign in</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AuthenticatedPage>
  );
};

export default Dashboard;
