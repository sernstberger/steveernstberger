import { Card, CardContent, CardActionArea, Typography } from "@mui/material";

const DashboardCard = (props: any) => {
  const { title, children } = props;

  return (
    <>
      <Typography>{title}</Typography>
      <Card>
        <CardActionArea>
          <CardContent>{children}</CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default DashboardCard;
