import { Box, Container } from "@mui/material";
import Sidebar from "../Sidebar";

interface AuthenticatedPageProps {
  children: React.ReactNode;
}

const AuthenticatedPage = (props: AuthenticatedPageProps) => {
  const { children } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          // height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <div>{children}</div>
        </Container>
      </Box>
    </Box>
  );
};

export default AuthenticatedPage;
