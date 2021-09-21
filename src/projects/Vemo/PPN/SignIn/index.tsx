import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Input from "../../../../componentLibrary/Form/Input";

const Background = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "calc(100vh - 64px)",
}));

const SignIn = () => {
  const history = useHistory();
  return (
    <Background>
      <Container maxWidth="sm">
        school
        <Card>
          <CardContent>
            <Typography variant="h1">Sign in</Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().required(),
              })}
              onSubmit={() => {
                history.push("/");
              }}
            >
              <Form>
                <Input label="Email" name="email" />
                <Input label="Password" name="password" />
                <Button onClick={() => history.push("vemo/dashboard")}>
                  Sign in
                </Button>
              </Form>
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </Background>
  );
};

export default SignIn;
