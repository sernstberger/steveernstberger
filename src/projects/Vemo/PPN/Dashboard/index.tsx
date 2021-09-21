import { useHistory } from "react-router-dom";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
import AuthenticatedPage from "../../../../componentLibrary/AuthenticatedPage";

// const Background = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   minHeight: "calc(100vh - 64px)",
// }));

const Dashboard = () => {
  const history = useHistory();
  return (
    <AuthenticatedPage>
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
