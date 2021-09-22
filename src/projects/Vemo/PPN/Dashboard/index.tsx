import { useHistory } from "react-router-dom";
import { Avatar, Alert, Grid, Typography } from "@mui/material";
import { styled, createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import AuthenticatedPage from "../../../../componentLibrary/AuthenticatedPage";
import DashboardCard from "../components/DashboardCard";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<any>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Dashboard = () => {
  const history = useHistory();

  return (
    <AuthenticatedPage
      sidebarItems={[
        {
          title: "My Dashboard",
          url: `/vemo/dashboard`,
          icon: <DashboardIcon />,
        },
        {
          title: "My Income",
          url: `/vemo/income`,
          icon: <ShoppingCartIcon />,
        },
        {
          title: "My Payments",
          url: `/vemo/payments`,
          icon: <PeopleIcon />,
        },
      ]}
    >
      <AppBar position="static" open elevation={0} color="inherit">
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Welcome, Steve!
          </Typography>
          <div>
            Steve Ernstberger
            <Avatar />
          </div>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Alert>Plaid</Alert>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <DashboardCard title="My payments" />
          </Grid>
          <Grid item xs={6}>
            <DashboardCard title="My income and employment" />
          </Grid>
          <Grid item xs={12}>
            <DashboardCard title="My agreements" />
          </Grid>
        </Grid>
      </Container>
    </AuthenticatedPage>
  );
};

export default Dashboard;
