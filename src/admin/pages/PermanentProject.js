import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, Button, Divider } from "@mui/material";
import { CLIENT_MSG } from "../../constants/actionTypes";
import { projectReporting } from "../../actions/activity";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles({
  heading: {
    width: "fit-content",
    borderBottom: "2px solid #B4880B",
    color: "#003895",
    "@media (max-width: 600px)": { width: "100%", textAlign: "center" },
  },
  grid: {
    marginTop: "0px",
    width: "80%",
    "@media (max-width: 600px)": { width: "100%" },
  },
  title: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    color: "#003895",
    fontSize: "0.6em",
    "@media (max-width: 600px)": {
      alignContent: "flex-start",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  label: {
    "& .css-1fi1ijh-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "1em",
    },
  },
  btn: {
    margin: "1rem",
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

const initialData = {
  projectTitle: "",
  date: "",
  description: "",
  image: { preview: "", data: "" },
};
export default function PermanentProject() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileUploadRef = useRef();
  const [projectData, setprojectData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setprojectData({ ...projectData, [e.target.name]: e.target.value });
  };

  // Function to handle file read
  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    // Check file size
    if (file.size > 500000) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: "Please choose a file smaller than 500kb",
          status: 400,
        },
      });
      event.target.value = "";
      return;
    }
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/jpg"
    ) {
      dispatch({
        type: CLIENT_MSG,
        message: { info: "file type not supported", status: 400 },
      });
      event.target.value = "";
      return;
    }

    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setprojectData({ ...projectData, image: img });
  };

  const resetForm = () => {
    setprojectData(initialData);
    };
  const handleLoading = () => {
    setIsLoading(false);
    };

  const submitDetails = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectTitle", projectData.projectTitle);
    formData.append("date", projectData.date);
    formData.append("description", projectData.description);
    formData.append("image", projectData.image.data);
    setIsLoading(true);
    dispatch(projectReporting(formData,resetForm,handleLoading));
  };
  return (
    <>
      <form onSubmit={submitDetails}>
        <Box
          bgcolor="white"
          p={3}
          margin={"2rem 0"}
          borderRadius={4}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.heading}>
            Project Information
          </Typography>
          <Grid
            container
            spacing={3}
            className={classes.grid}>
            <Grid
              item
              xs={12}
              lg={6}
              className={classes.title}>
              <Typography>Title Of project</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}>
              <TextField
                required
                id="projectTitle"
                name="projectTitle"
                value={projectData.projectTitle}
                label="Enter project Title"
                type="text"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={handleChange}
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            className={classes.grid}>
            <Grid
              item
              xs={12}
              lg={6}
              className={classes.title}>
              <Typography>Date Of project</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}>
              <TextField
                required
                id="date"
                name="date"
                value={projectData.date}
                label="Select Date"
                fullWidth
                variant="standard"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            className={classes.grid}>
            <Grid
              item
              xs={12}
              lg={6}
              className={classes.title}>
              <Typography>Description of project</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}>
              <TextField
                id="description"
                name="description"
                label="Enter Description"
                value={projectData.description}
                type="text"
                variant="standard"
                fullWidth
                required
                onChange={handleChange}
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            className={classes.grid}>
            <Grid
              item
              xs={12}
              lg={6}
              className={classes.title}>
              <Typography>Photographs of project</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}>
              <TextField
                ref={fileUploadRef}
                type="file"
                id="image-upload"
                name="image"
                label="Upload Photo less than 500kb"
                fullWidth
                required
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  accept: "image/jpeg,image/png",
                }}
                onChange={handleFileRead}
                onClick={() => fileUploadRef.current.click()}
              />
              {projectData.image.preview && (
                <img
                  src={projectData.image.preview}
                  width="100"
                  height="100"
                  alt="project"
                />
              )}
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            gap={4}>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                className={classes.btn}>
               {isLoading ? <CircularProgress /> : "Submit"}
              </Button>
            </Grid>
            <Grid item>
              <Box>
                <Button
                  type="button"
                  variant="outlined"
                  className={classes.btn}>
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
