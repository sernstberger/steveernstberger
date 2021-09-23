import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink, NavLinkProps } from "react-router-dom";

export interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
  url: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { icon, title, url } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<NavLinkProps, "to">>(
        function Link(itemProps, ref) {
          return <NavLink to={url} ref={ref} {...itemProps} role={undefined} />;
        }
      ),
    [url]
  );

  return (
    <ListItemButton
      component={renderLink}
      sx={{
        alignItems: "normal",
        height: 40,
        paddingBottom: 0,
        paddingRight: 0,
        paddingTop: 0,
        "&.active": {
          // backgroundColor: "primary.main",

          "& .MuiListItemIcon-root": {
            backgroundColor: "primary.main",
            borderRadius: "50px 0 0 50px",
            color: "#FFF",
          },

          "& .MuiListItemText-root": {
            backgroundColor: "primary.main",
            color: "#FFF",

            "& .MuiTypography-root": {
              // fontWeight: 700,
            },
          },
        },
      }}
    >
      <ListItemIcon
        sx={{
          alignItems: "center",
          minWidth: "auto",
          padding: "0 16px",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        sx={{
          alignItems: "center",
          display: "flex",
          margin: 0,

          "& .MuiTypography-root": {
            fontSize: 14,
            fontWeight: 700,
          },
        }}
        primary={title}
      />
    </ListItemButton>
  );
};

export default SidebarItem;
