import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

export interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
  url: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { icon, title, url } = props;
  return (
    <ListItem button>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default SidebarItem;
