import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

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
    <Drawer variant="permanent" open>
      <div>logo</div>
      <List>
        {sidebarItems.map((sidebarItem: SidebarItemProps) => {
          const { title, icon, url } = sidebarItem;
          return <SidebarItem {...{ title, icon, url }} />;
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
