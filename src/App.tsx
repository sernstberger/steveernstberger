import { Box, Typography, Container, Link as MuiLink } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SalaryCalculator from "./components/SalaryCalculator";
import Job from "./components/Job";
import { List } from "@mui/material";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Resume from "./components/Resume";
import resumeData from "./components/Resume/data";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Email, GitHub } from "@mui/icons-material";
import IconLinkButton from "./components/IconLinkButton";
import WorkHighlight from "./components/WorkHighlight";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const sections: any[] = [
  { title: "Home", url: "/" },
  { title: "Income calculator", url: "/income-calculator" },
];

export default function App() {
  const { jobs } = resumeData;
  return (
    <Router>
      <Container maxWidth="xl">
        <>
          <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
            <div>
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                noWrap
                sx={{ flex: 1 }}
              >
                Steve Ernstberger
              </Typography>
              <Typography>Front-End Developer</Typography>
            </div>

            <IconLinkButton
              icon={<GitHub />}
              href="https://github.com/sernstberger"
            />
            <IconLinkButton
              icon={<Email />}
              href="mailto:steve.ernstberger.dev@gmail.com"
            />

            <Button
              variant="outlined"
              size="small"
              component={PDFDownloadLink}
              document={<Resume />}
              fileName="Steve Ernstberger Resume.pdf"
            >
              <span>
                Download
                {({ blob, url, loading, error }: any) =>
                  loading ? "Loading document..." : "Download resume"
                }
              </span>
            </Button>
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: "space-between", overflowX: "auto" }}
          >
            <nav>
              <ul>
                {sections.map((section) => (
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
          </Toolbar>
        </>

        <div>
          <Switch>
            <Route path="/income-calculator">
              <SalaryCalculator />
            </Route>
            <Route path="/">
              <div>
                <div>
                  <Typography variant="h3">Expertise</Typography>
                  <Typography>
                    I am a Front-End Developer with 14 years of professional
                    experience. I have worked with large enterprise clients like
                    Cummins, Interactive Intelligence, and ExactTarget,
                    start-ups with one employee, and everything in between. I
                    currently work for Vemo Education, where I serve as the Lead
                    Front-End Developer. I enjoy solving problems and creating
                    beautiful interfaces that are easy to use on any device. In
                    my free time I enjoy traveling, watching movies, playing
                    trivia, and drawing.
                  </Typography>
                  <Typography variant="h3">Selected Work</Typography>
                  <WorkHighlight
                    company="Vemo Education"
                    description="Development of applications to help students
                  decide whether to get a traditional student loan or an income
                  share agreement (ISA), apply, and make payments, as well as,
                  an application to help school administrators track students in
                  their application process."
                  />
                  <WorkHighlight
                    company="Cummins PrevenTech"
                    description="Development of application that tracks the
                    status of mining equipment that alerts customers and care
                    agents when problems arise."
                  />
                  <WorkHighlight
                    company="ExactTarget HubExchange"
                    description="Implemented user interface for ExactTarget’s (now Salesforce)
                    app store - HubExchange."
                  />
                </div>
                <Typography variant="h3">Experience</Typography>
                <List>
                  {jobs.map((job: any) => {
                    return <Job key={job.company} {...{ job }} />;
                  })}
                </List>

                <PDFViewer height="800" width="1000">
                  <Resume />
                </PDFViewer>
              </div>
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}
