import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Input from "../../../componentLibrary/Form/Input";
import vemoTheme from "../theme";

const Background = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
}));

const PPN = () => {
  return (
    <ThemeProvider theme={vemoTheme}>
      <Background>
        <Container maxWidth="sm">
          school
          <Card>
            <CardContent>
              <Typography variant="h1">Sign in</Typography>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object().shape({
                  email: Yup.number().required(),
                  password: Yup.number().required(),
                })}
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
      </Background>
    </ThemeProvider>
  );
};

export default PPN;
