import { Box } from "@mui/material";
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
        <div>{children}</div>
      </Box>
    </Box>
  );
};

export default AuthenticatedPage;
