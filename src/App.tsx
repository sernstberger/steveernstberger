import { Box, Typography, Container } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SalaryCalculator from "./components/SalaryCalculator";
import Job from "./components/Job";
import { List } from "@mui/material";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Resume from "./components/Resume";
import resumeData from "./components/Resume/data";

export default function App() {
  const { jobs } = resumeData;
  return (
    <Router>
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Steve Ernstberger
          </Typography>
          <Typography>Contact: steve.ernstberger.dev@gmail.com</Typography>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/income-calculator">Income Calculator</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <br />
          <br />

          <div>
            <Switch>
              <Route path="/income-calculator">
                <SalaryCalculator />
              </Route>
              <Route path="/">
                <div>
                  <div>
                    Lead Front-End Developer https://github.com/sernstberger
                    <Typography variant="h3">Expertise</Typography>
                    <Typography>
                      I am a Front-End Developer with 14 years of professional
                      experience. I have worked with large enterprise clients
                      like Cummins, Interactive Intelligence, and ExactTarget,
                      start-ups with one employee, and everything in between. I
                      currently work for Vemo Education, where I serve as the
                      Lead Front-End Developer. I enjoy solving problems and
                      creating beautiful interfaces that are easy to use on any
                      device. In my free time I enjoy traveling, watching
                      movies, playing trivia, and drawing.
                    </Typography>
                    <Typography variant="h3">Selected Work</Typography>
                    Vemo Education Development of applications to help students
                    decide whether to get a traditional student loan or an
                    income share agreement (ISA), apply, and make payments, as
                    well as, an application to help school administrators track
                    students in their application process. Cummins PrevenTech
                    Development of application that tracks the status of mining
                    equipment that alerts customers and care agents when
                    problems arise. ExactTarget HubExchange Implemented user
                    interface for ExactTarget’s (now Salesforce) app store -
                    HubExchange.
                  </div>
                  <Typography>Experience</Typography>
                  <List>
                    {jobs.map((job: any) => {
                      return <Job key={job.company} {...{ job }} />;
                    })}
                  </List>

                  <PDFDownloadLink
                    document={<Resume />}
                    fileName="Steve Ernstberger Resume.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? "Loading document..." : "Download now!"
                    }
                  </PDFDownloadLink>

                  <PDFViewer height="800" width="1000">
                    <Resume />
                  </PDFViewer>
                </div>
              </Route>
            </Switch>
          </div>
        </Box>
      </Container>
    </Router>
  );
}
