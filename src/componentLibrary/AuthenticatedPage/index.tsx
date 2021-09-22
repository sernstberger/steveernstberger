import { Box, Container } from "@mui/material";
import Sidebar from "../Sidebar";
import { SidebarItemProps } from "../Sidebar/SidebarItem";

interface AuthenticatedPageProps {
  children: React.ReactNode;
  sidebarItems: SidebarItemProps[];
}

const AuthenticatedPage = (props: AuthenticatedPageProps) => {
  const { children, sidebarItems } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar {...{ sidebarItems }} />

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
