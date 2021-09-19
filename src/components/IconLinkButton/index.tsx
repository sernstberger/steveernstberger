import { Box, Typography, Container, Link as MuiLink } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const IconLinkButton = (props: any) => {
  const { href, icon } = props;
  return (
    <IconButton component="a" {...{ href }}>
      {icon}
    </IconButton>
  );
};

export default IconLinkButton;
