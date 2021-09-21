import { Container, Typography } from "@mui/material";
import Job from "../../components/Job";
import { PDFViewer } from "@react-pdf/renderer";
import resumeData from "../../components/Resume/data";
import { JobProps } from "../../types";
// import WorkHighlight from "./components/WorkHighlight";

export default function App() {
  const { jobs } = resumeData;
  return (
    <div style={{ padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Typography variant="h3">Expertise</Typography>
        <Typography>
          I am a Front-End Developer with 14 years of professional experience. I
          have worked with large enterprise clients like Cummins, Interactive
          Intelligence, and ExactTarget, start-ups with one employee, and
          everything in between. I currently work for Vemo Education, where I
          serve as the Lead Front-End Developer. I enjoy solving problems and
          creating beautiful interfaces that are easy to use on any device. In
          my free time I enjoy traveling, watching movies, playing trivia, and
          drawing.
        </Typography>
        {/* <Typography variant="h3" mt={6}>
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
                  </Grid> */}
        <Typography variant="h3" mt={6}>
          Experience
        </Typography>
        <div>
          {jobs.map((job: JobProps) => {
            return <Job key={job.company} {...job} />;
          })}
        </div>

        {/* <PDFViewer height="800" width="1000">
                  <Resume />
                </PDFViewer> */}
      </Container>
    </div>
  );
}
