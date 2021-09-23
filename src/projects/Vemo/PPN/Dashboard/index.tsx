import { useHistory } from "react-router-dom";
import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import { styled, createTheme } from "@mui/material/styles";
import {
  AccountBalance,
  AttachMoney,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import AuthenticatedPage from "../../../../componentLibrary/AuthenticatedPage";
import DashboardCard from "../components/DashboardCard";
import Stat from "../../../../componentLibrary/Stat";
import StatWithProgress from "../../../../componentLibrary/StatWithProgress";

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
          icon: <AccountBalance />,
        },
        {
          title: "My Payments",
          url: `/vemo/payments`,
          icon: <AttachMoney />,
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
          <div style={{ display: "flex" }}>
            Steve Ernstberger
            <Avatar />
          </div>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* <Alert>Plaid</Alert> */}
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <DashboardCard title="My payments">
              <div style={{ display: "flex" }}>
                <Stat value={123123} label="fooooo" currency />
                <Button>Pay now</Button>
              </div>
            </DashboardCard>
          </Grid>
          <Grid item xs={6}>
            <DashboardCard title="My income and employment">
              <StatWithProgress
                current={{ value: 1231231, label: "ahhh" }}
                goal={{ value: 1431231, label: "whaaaa" }}
              />
            </DashboardCard>
          </Grid>
          <Grid item xs={12}>
            <DashboardCard title="My agreements">
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  adfdasf
                </Grid>
                <Grid item xs={1}>
                  <Divider orientation="vertical" />
                </Grid>
                <Grid item xs={3}>
                  <StatWithProgress
                    current={{ value: 4444, label: "ahhh" }}
                    goal={{ value: 11111, label: "whaaaa" }}
                    currency
                  />
                </Grid>
                <Grid item xs={3}>
                  <StatWithProgress
                    current={{ value: 4444, label: "ahhh" }}
                    goal={{ value: 11111, label: "whaaaa" }}
                    currency
                  />
                </Grid>
              </Grid>
            </DashboardCard>
          </Grid>
        </Grid>
      </Container>
    </AuthenticatedPage>
  );
};

export default Dashboard;
