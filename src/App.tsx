import {
  Box,
  Typography,
  Container,
  Link as MuiLink,
  Grid,
} from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SalaryCalculator from "./components/SalaryCalculator";
import Job from "./components/Job";
import { List } from "@mui/material";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Resume from "./components/Resume";
import resumeData from "./components/Resume/data";
import Button from "@mui/material/Button";
import WorkHighlight from "./components/WorkHighlight";
import Header from "./components/Header";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function App() {
  const { jobs } = resumeData;
  return (
    <Router>
      <Header />
      <Container maxWidth="lg">
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
                  <Typography variant="h3" mt={6}>
                    Selected Work
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={12} sm={5}>
                      <WorkHighlight
                        company="Vemo Education"
                        description="Development of applications to help students
                  decide whether to get a traditional student loan or an income
                  share agreement (ISA), apply, and make payments, as well as,
                  an application to help school administrators track students in
                  their application process."
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <WorkHighlight
                        company="Cummins PrevenTech"
                        description="Development of application that tracks the
                    status of mining equipment that alerts customers and care
                    agents when problems arise."
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <WorkHighlight
                        company="ExactTarget HubExchange"
                        description="Implemented user interface for ExactTarget’s (now Salesforce)
                    app store - HubExchange."
                      />
                    </Grid>
                  </Grid>
                </div>
                <Typography variant="h3" mt={6}>
                  Experience
                </Typography>
                <div>
                  {jobs.map((job: any) => {
                    return <Job key={job.company} {...{ job }} />;
                  })}
                </div>

                {/* <PDFViewer height="800" width="1000">
                  <Resume />
                </PDFViewer> */}
              </div>
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}
