import { useHistory } from "react-router-dom";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { styled, createTheme } from "@mui/material/styles";

const DashboardCard = (props: any) => {
  const { title, children } = props;
  const history = useHistory();
  return (
    <>
      <Typography>{title}</Typography>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};

export default DashboardCard;
