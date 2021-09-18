import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SalaryCalculator from "./components/SalaryCalculator";

export default function App() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Steve Ernstberger
        </Typography>
        <Typography>Contact: steve.ernstberger.dev@gmail.com</Typography>
        <hr />
        <br />
        <br />
        <SalaryCalculator />
      </Box>
    </Container>
  );
}
