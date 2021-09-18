import { Box, Button, Typography, Container } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SalaryCalculator from "./components/SalaryCalculator";
import Job from "./components/Job";
import { List } from "@mui/material";
import ReactPDF, { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import Resume from "./components/Resume";

const jobs = [
  {
    company: "Vemo Education",
    title: "Lead Front-End Developer",
    startDate: "2019",
    description:
      "As Lead Front-End Developer at Vemo Education, I lead our team of developers as we create software for students and administrators for income share agreements. I help create and architect technical requirements and their solutions, help and mentor other developers, and review code. I also have worked on implementing a design system across projects and also built algorithms that calculate loans and income share agreements.",
  },

  {
    company: "DeveloperTown",
    startDate: "2013",
    endDate: "2019",
    title: "Developer",
    description:
      "At DeveloperTown, I worked as a front-end developer. My projects usually consisted of a React front-end connected to an API for data. I worked with clients to gather requirements, estimate work, and guide them through the software building process. I worked closely with our project managers, designers, and back-end developers to build awesome software.",
  },

  {
    company: "DWA Healthcare Communications Group",
    startDate: "2013",
    endDate: "2013",
    title: "Front end developer",
    description: "At DWA, I built web interfaces for Eli Lilly.",
  },

  {
    company: "KA+A",
    startDate: "2012",
    endDate: "2013",
    title: "Interaction Designer",
    description:
      "At KA+A, I developed web applications for several clients, including ExactTarget (HubExchange) and Angie’s List (Big Deal).",
  },

  {
    company: "Right On Interactive",
    startDate: "2011",
    endDate: "2012",
    title: "Interactive Marketing Manager",
    description: "adfdsaf",
  },

  {
    company: "Kemper Technology Consulting",
    startDate: "2010",
    endDate: "2011",
    title: "Web Designer/Developer",
    description: "adfdsaf",
  },

  {
    company: "University of Evansville",
    startDate: "2008",
    endDate: "2010",
    title: "Manager of Digital Media",
    description: "adfdsaf",
  },

  {
    company: "Dell, Inc.",
    startDate: "2007",
    endDate: "2008",
    title: "Senior Account Manager",
    description:
      "At Dell, Inc., I was on the phone with customers assiting them with their computer, server, and software needs. I had $1.7 million in sales (over 100% of quota every month).",
  },

  {
    company: "Ball State University",
    startDate: "2003",
    endDate: "2007",
    title: "Student",
    description:
      "Bachelor’s of Arts Telecommunications, Multimedia focus Minor in Marketing ",
  },
];

export default function App() {
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
                  <Typography>
                    Lead Front-End Developer 317.413.2489 steve32285@gmail.com
                    https://github.com/sernstberger Expertise I am a Front-End
                    Developer with 14 years of professional experience. I have
                    worked with large enterprise clients like Cummins,
                    Interactive Intelligence, and ExactTarget, start-ups with
                    one employee, and everything in between. I currently work
                    for Vemo Education, where I serve as the Lead Front-End
                    Developer. I enjoy solving problems and creating beautiful
                    interfaces that are easy to use on any device. In my free
                    time I enjoy traveling, watching movies, playing trivia, and
                    drawing. Selected Work Vemo Education Development of
                    applications to help students decide whether to get a
                    traditional student loan or an income share agreement (ISA),
                    apply, and make payments, as well as, an application to help
                    school administrators track students in their application
                    process. Cummins PrevenTech Development of application that
                    tracks the status of mining equipment that alerts customers
                    and care agents when problems arise. ExactTarget HubExchange
                    Implemented user interface for ExactTarget’s (now
                    Salesforce) app store - HubExchange.
                  </Typography>
                  <Typography>Experience</Typography>
                  <List>
                    {jobs.map((job: any) => {
                      return <Job key={job.company} {...{ job }} />;
                    })}
                  </List>

                  {/* <Button
                    onClick={() =>
                      ReactPDF.renderToStream(
                        <Resume />,
                        // `${__dirname}/Steve Ernstberger Resume.pdf`
                      )
                    }
                  >
                    click
                  </Button> */}



                  <PDFDownloadLink document={<Resume />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>

                  <PDFViewer>
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
