import {
  Box,
  Divider,
  Drawer as MuiDrawer,
  List,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";
import Logo from "../Logo/vemo-logo.svg";
import HavertonLogo from "../Logo/haverton-logo.svg";

interface SidebarProps {
  sidebarItems: SidebarItemProps[];
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Sidebar = (props: SidebarProps) => {
  const { sidebarItems } = props;
  return (
    <Drawer
      variant="permanent"
      open
      PaperProps={{
        sx: { borderRadius: "0 30px 0 0", justifyContent: "space-between" },
      }}
    >
      <div>
        <Box my={3} justifyContent="center" display="flex">
          <img src={HavertonLogo} alt="Haverton" />
        </Box>
        <List>
          {sidebarItems.map((sidebarItem: SidebarItemProps) => {
            const { title, icon, url } = sidebarItem;
            return <SidebarItem key={title} {...{ title, icon, url }} />;
          })}
        </List>
      </div>
      <div>
        <Divider />
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          padding={3}
        >
          {/* <Box display="flex" width="100%" justifyContent="space-around">
            <Link
              href="#terms"
              sx={{
                color: "text.secondary",
                fontSize: 12,
              }}
            >
              Terms
            </Link>
            <Divider orientation="vertical" />
            <Link
              href="#privacy"
              sx={{
                color: "text.secondary",
                fontSize: 12,
              }}
            >
              Privacy policy
            </Link>
          </Box> */}
          <Box my={2}>
            <img src={Logo} alt="Logo" width="100px" />
          </Box>
          <Typography variant="caption">© 2021 Steve Ernstberger</Typography>
        </Box>
      </div>
    </Drawer>
  );
};

export default Sidebar;
