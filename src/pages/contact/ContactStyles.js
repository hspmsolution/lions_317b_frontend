import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "600px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "2rem",
    borderRadius: "1rem",
  },
  textField: {
    marginBottom: "1rem",
    width: "100%",
  },
  button: {
    marginTop: "1rem",
    width: "100%",
    color: "white",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
  },
  heading: {
    paddingBottom: "1rem",
  },
}));
