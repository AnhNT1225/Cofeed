import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  useFormik,
} from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { auth } from "../../firebase";

interface LoginFormValues {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    }),
    onSubmit: async(values, actions) => {
      console.log(JSON.stringify(values, null, 2));
      try {
        const result = await signInWithEmailAndPassword(auth, values.email, values.password)
        
        console.log('result: ', result)
        navigate('/')
      } catch (error) {
        console.log('error: ', error);
        
      }
      actions.setSubmitting(false);
    },
  });

  return (
    <Container
      component="main"
      maxWidth="xs"
      // sx={{ border: "1px solid orange" }}
    >
      <Box
        sx={{
          mt: 35,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          // border: "1px solid green",
        }}
      >
        <Typography variant="h4">Login</Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            margin="normal"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            margin="normal"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button type="submit" fullWidth color="secondary" variant="contained">
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
