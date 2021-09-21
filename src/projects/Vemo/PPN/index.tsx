import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Formik, Form } from "formik";
import Input from "../../../componentLibrary/Form/Input";
import vemoTheme from "../../../theme";

const PPN = () => {
  return (
    <ThemeProvider theme={vemoTheme}>
      <div style={{ backgroundColor: "red", minHeight: "100vh" }}>
        <Container maxWidth="sm">
          <Card>
            <CardContent>
              <Typography variant="h1">Sign in</Typography>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={() => {}}
              >
                <Form>
                  <Input label="Email" name="email" />
                  <Input label="Password" name="password" />
                  <Button>Sign in</Button>
                </Form>
              </Formik>
            </CardContent>
          </Card>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default PPN;
