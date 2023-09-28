import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addClubAbout } from "../../actions/clubs";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PermanentProject from "./PermanentProject";

const useStyles = makeStyles({
  heading: {
    width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",
  },
  grid: {
    marginTop: "10px",
    width: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    color: "#003895",
    fontSize: "0.6em",
  },
  btn: {
    marginTop: "15px",
    "& .css-12vebo6-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",

      padding: "10px 16px 10px 16px",
    },
    "& .css-731omg-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",

      padding: "10px 16px 10px 16px",
    },
  },
});

export default function AddClubDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileUploadRef = useRef();
  const [about, setAbout] = useState("");

  const submitDetails = (e) => {
    e.preventDefault();
    dispatch(addClubAbout({ about }));
    console.log(about, "about");
    // setAbout('');
  };

  return (
    <>
      <form onSubmit={submitDetails}>
        <Box bgcolor="white" p={3} borderRadius={4}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginTop: "16px" }}
            className={classes.heading}
          >
            About Club Details
          </Typography>

          <br />

          <CKEditor
            editor={ClassicEditor}
            data={about}
            onReady={(editor) => {
              console.log("Editor is ready to use!");
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setAbout(data);
              console.log(data, "data");
            }}
            onBlur={(event, editor) => {
              console.log("Blur.");
            }}
            onFocus={(event, editor) => {
              console.log("Focus.");
            }}
          />

          <Grid container justifyContent="center">
            <Grid item xs={2}>
              <Button type="submit" variant="contained" className={classes.btn}>
                Submit
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Box marginLeft={1}>
                <Button
                  type="button"
                  variant="outlined"
                  className={classes.btn}
                  onClick={() => setAbout("")}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </form>

      <br />
      <br />
      <PermanentProject />
    </>
  );
}
