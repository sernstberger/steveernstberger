import { AppBar, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { Email, GitHub } from "@mui/icons-material";
import IconLinkButton from "../IconLinkButton";
import CreatePdfButton from "../CreatePdfButton";

interface HeaderItemsProps {
  title: string;
  url: string;
}
const sections: HeaderItemsProps[] = [
  { title: "Home", url: "/" },
  { title: "Income calculator", url: "/income-calculator" },
];

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            fontWeight="bold"
            component="h2"
            variant="h5"
            color="textPrimary"
            noWrap
            sx={{ flex: 1 }}
          >
            Steve Ernstberger
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Front-End Developer
          </Typography>
        </Link>

        <nav>
          <ul>
            {sections.map((section: HeaderItemsProps) => (
              <MuiLink
                component={Link}
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                to={section.url}
                sx={{ p: 1, flexShrink: 0 }}
              >
                {section.title}
              </MuiLink>
            ))}
          </ul>
        </nav>

        <div>
          <CreatePdfButton />

          <IconLinkButton
            icon={<GitHub />}
            href="https://github.com/sernstberger"
          />
          <IconLinkButton
            icon={<Email />}
            href="mailto:steve.ernstberger.dev@gmail.com"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
