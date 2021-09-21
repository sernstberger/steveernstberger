import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
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
      <Card>
        <CardContent>
          <Typography variant="h1">Sign in</Typography>
        </CardContent>
      </Card>
    </AuthenticatedPage>
  );
};

export default Dashboard;
