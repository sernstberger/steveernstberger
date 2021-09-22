import { useHistory } from "react-router-dom";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { styled, createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DashboardCard = (props: any) => {
  const { title } = props;
  const history = useHistory();
  return (
    <>
      <Typography>{title}</Typography>
      <Card>
        <CardContent>
          <Typography variant="h1">Sign in</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardCard;
