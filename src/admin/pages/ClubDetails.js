import React, { useRef,useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addClubAbout } from "../../actions/clubs";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
  const [about,setAbout]=useState('');

  const submitDetails = (e) => {
    e.preventDefault();
    dispatch(addClubAbout({about}));
    console.log(about,'about');
   // setAbout('');
    };

  return (
    <>
      <form  onSubmit={submitDetails}>
        <Box bgcolor="white" p={3} borderRadius={4} >
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
              console.log(data,'data');
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
                  onClick={()=>setAbout('')}
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

      <form>
        <Box bgcolor="white" p={3} borderRadius={4}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginTop: "16px" }}
            className={classes.heading}
          >
            Permanent Projects
          </Typography>

          <br />

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={2} sm={2} className={classes.title}>
              <Typography>Activity Name </Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                required
                type="text"
                id="projectTitle"
                name="projectTitle"
                label="Enter Project Title"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                className={classes.label}
              />
            </Grid>

            <Grid item xs={2} sm={2} className={classes.title}>
              <Typography>Upload Images</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                ref={fileUploadRef}
                type="file"
                id="image-upload"
                name="image"
                label="Upload Photo less than 500kb"
                fullWidth
                required
                margin="normal"
                className={classes.label}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  accept: "image/jpeg,image/png",
                }}
                onClick={() => fileUploadRef.current.click()}
              />
              {/* {activity.image.preview && (
              <img src={activity.image.preview} width="100" height="100" />
            )} */}
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={4} sm={2} className={classes.title}>
              <Typography>Description </Typography>
            </Grid>
            <Grid item xs={8} sm={10}>
              <CKEditor
                editor={ClassicEditor}
                data="<p>Enter about club details</p>"
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} className={classes.grid}></Grid>

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
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
}
