import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { signInReq } from "../../../actions/auth";
import { ADMIN } from "../../../constants/actionTypes";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  label: {
    " & label.MuiInputLabel-root, & input.MuiInputBase-input": {
      color: "white",
    },
    " & label.MuiInputLabel-root": {
      color: "white",
      fontWeight: "bolder",
    },
    " & input.MuiInputBase-input": {
      padding: "0.8rem",
      borderRadius: "0.5rem",
    },
    "& label.Mui-focused": {
      color: "white",
    },
  },
  button: {
    "&.MuiButton-root": {
      backgroundColor: "transparent",
      border: "1px solid white",
      "&:hover, &:active": {
        color: "white",
        border: "1px solid white",
      },
      "&:active": {
        backgroundColor: "#0d99d7",
        // color: "#39459b",
      },
    },
  },
});

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message?.info);
  const isAdmin = useSelector((state) => state.auth.admin);
  const [disabled, setDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      memberId: "",
      password: "",
    },
    validationSchema: Yup.object({
      memberId: Yup.number()
        .integer("Must be an integer")
        .required("Member Id is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: (data) => {
      setTimeout(() => {
        dispatch(signInReq(data, navigate));
      }, 500);

      setDisabled(true);
    },
  });

  useEffect(() => {
    dispatch({ type: ADMIN });
    if (isAdmin) navigate("/");
  }, []);

  useEffect(() => {
    if (message) setDisabled(false);
  }, [message]);

  return (
    <Box
      sx={{
        backgroundImage: 'url("/assets/img/login01.png")',
        backgroundSize: "cover",
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title> Login </title>
      </Helmet>
      <Box
        //component="main"
        sx={{
          boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 5.5px )",
          borderRadius: "1rem",
          maxWidth: "758px",
          margin: "auto",
          padding: { xs: "3rem 0.5rem", sm: "3rem 3rem", lg: "3rem 5rem" },
          color: "white",
        }}
      >
        <Container maxWidth="sm">
          <Link to="/">
            <Button
              component="a"
              sx={{
                color: "white",
                "&:hover": { backgroundColor: "white", color: "rgb(22,20,69)" },
              }}
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Home
            </Button>
          </Link>
          <form
            onSubmit={formik.handleSubmit}
            className={classes.label}
          >
            <Box
              sx={{
                pb: 1,
                pt: 3,
                color: "white",
              }}
            >
              <Typography
                align="center"
                color="white"
                variant="h6"
              >
                Login with Member Id
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.memberId && formik.errors.memberId)}
              fullWidth
              helperText={formik.touched.memberId && formik.errors.memberId}
              label="Member Id"
              margin="normal"
              name="memberId"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.email}
              variant="standard"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="standard"
            />
            <Box sx={{ py: 2 }}>
              <Button
                className={classes.button}
                disabled={disabled}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Login In Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
