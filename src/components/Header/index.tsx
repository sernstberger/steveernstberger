import { AppBar, Typography, Container, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { List } from "@mui/material";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Resume from "../Resume";
import resumeData from "../Resume/data";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Email, GitHub } from "@mui/icons-material";
import IconLinkButton from "../IconLinkButton";

const sections: any[] = [
  { title: "Home", url: "/" },
  { title: "Income calculator", url: "/income-calculator" },
];

const Header = (props: any) => {
  const { company, description } = props;
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
        <div>
          <Typography
            fontWeight="bold"
            component="h2"
            variant="h5"
            color="inherit"
            noWrap
            sx={{ flex: 1 }}
          >
            Steve Ernstberger
          </Typography>
          <Typography variant="body2">Front-End Developer</Typography>
        </div>

        <nav>
          <ul>
            {sections.map((section: any) => (
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
          <Button
            variant="outlined"
            size="small"
            component={PDFDownloadLink}
            document={<Resume />}
            fileName="Steve Ernstberger Resume.pdf"
          >
            <span>
              Download Resume
              {({ blob, url, loading, error }: any) =>
                loading ? "Loading document..." : "Download resume"
              }
            </span>
          </Button>

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
