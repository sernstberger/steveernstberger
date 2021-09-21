import { Box, Container, Toolbar } from "@mui/material";
import { useState } from "react";
import Sidebar from "../Sidebar";

interface AuthenticatedPageProps {
  children: React.ReactNode;
}

const AuthenticatedPage = (props: AuthenticatedPageProps) => {
  const { children } = props;
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <div>{children}</div>
        </Container>
      </Box>
    </Box>
  );
};

export default AuthenticatedPage;
