import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";
import useStyles from "./ContactStyles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CustomizedBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";

const ContactForm = () => {
  function createData(name, designation, phone) {
    return { name, designation, phone };
  }

const rows = [
    createData("Erle Brito", "District Governor", "+91 98237 87447"),
    createData("Sachin Kale", "District Information Technology Chairperson", "+91 98237 87447"),
    createData("Adhwinikumar B Karpe", "Cabinet Secretary", "+91 84110 41640"),
  ];

  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonColor, setButtonColor] = useState("primary");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      setFirstNameError(true);
    }

    if (!lastName) {
      setLastNameError(true);
    }

    if (!email) {
      setEmailError(true);
    }

    if (!phone) {
      setPhoneError(true);
    }

    if (!subject) {
      setSubjectError(true);
    }

    if (!message) {
      setMessageError(true);
    }

    if (firstName && lastName && email && phone && subject && message) {
      setIsSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setButtonColor("success");

      setTimeout(() => {
        setButtonColor("primary");
        setIsSubmitted(false);
      }, 2000);
    }
  }, [isSubmitted]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/newbg02.png')",
          backgroundAttachment: "fixed",
          animation: " animatedBackground 20s linear infinite;",
          "@keyframes animatedBackground": {
            "0%": {
              backgroundPosition: " 0 0",
            },

            "100%": {
              backgroundPosition: "100% 0",
            },
          },
        }}>
        <CustomizedBreadcrumbs label={"Contact Us"} />

        <Box
          sx={{
            flexGrow: 1,
            padding: "3rem 0",
            display: "flex",
            justifyContent: "center",
          }}>
          <Grid
            container
            // spacing={2}
            sx={{
              maxWidth: "900px",
              backgroundColor: "white",
              padding: { xs: "3rem  0", md: "3rem 3rem 3rem 0" },
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              sx={{
                display: "flex",

                alignItems: "center",
              }}>
              <Box
                sx={{
                  backgroundColor: "rgba(29, 60, 122, 0.85)",
                  marginLeft: { xs: "0", md: "-70px" },
                  width: "100%",
                  height: "auto%",
                  padding: "1.5rem",
                }}
                md={4}>
                {rows.map((item, index) => (
                  <Card
                    sx={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                      margin: "2rem 0",
                      width: "100%",
                    }}>
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: "rgba(29, 60, 122, 0.9)" }}>
                        Name : {item.name}
                      </Typography>
                      <Typography color="text.secondary">
                        Designation: {item.designation}
                      </Typography>
                      <Typography color="text.secondary">
                        Phone: {item.phone}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={8}
              lg={8}>
              <Box sx={{ backgroundColor: "", padding: "1rem" }}>
                <Typography
                  variant={"h2"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  marginBottom={"2rem"}
                  color={"rgba(29, 60, 122, 0.85)"}>
                  Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    spacing={3}>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={6}>
                      <TextField
                        label="First Name"
                        variant="outlined"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          setFirstNameError(false);
                        }}
                        fullWidth
                        type="text"
                        error={firstNameError}
                        helperText={firstNameError && "Enter First Name"}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={6}>
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          setLastNameError(false);
                        }}
                        // className={classes.textField}
                        fullWidth
                        type="text"
                        error={lastNameError}
                        helperText={lastNameError && "Enter Last Name"}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={6}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError(false);
                        }}
                        // className={classes.textField}
                        type="email"
                        fullWidth
                        error={emailError}
                        helperText={emailError && "Enter Valid Email"}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={6}>
                      <TextField
                        label="Phone Number"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setPhoneError(false);
                        }}
                        // className={classes.textField}
                        fullWidth
                        type="tel"
                        InputProps={{
                          pattern: "^\\d{10}$",
                        }}
                        error={phoneError}
                        helperText={phoneError && "Enter Valid Phone Number"}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      subject
                      md={12}
                      lg={12}>
                      <TextField
                        label="Subject"
                        variant="outlined"
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value);
                          setSubjectError(false);
                        }}
                        // className={classes.textField}
                        fullWidth
                        error={subjectError}
                        helperText={subjectError && "Enter Subject"}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}>
                      <TextField
                        label="Message"
                        variant="outlined"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          setMessageError(false);
                        }}
                        // className={classes.textField}
                        multiline
                        rows={4}
                        fullWidth
                        error={messageError}
                        helperText={messageError && "Enter Message"}
                      />
                    </Grid>{" "}
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}>
                      <Button
                        variant="contained"
                        color={buttonColor}
                        type="submit"
                        className={classes.button}>
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
