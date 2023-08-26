import React, { useRef } from "react";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  IconButton,
  Edit,
  Delete,
  Box,
  TextField,
  Grid,
} from "@mui/material";

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

export default function ClubGallery() {
  const classes = useStyles();
  const fileUploadRef = useRef();

  return (
    <>
      <form>
        <Box bgcolor="white" p={3} borderRadius={4}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginTop: "16px" }}
            className={classes.heading}
          >
            Club Gallery
          </Typography>

          <br />

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={2} sm={2} className={classes.title}>
              <Typography>Heading </Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                required
                type="text"
                id="galleryTitle"
                name="galleryTitle"
                label="Heading"
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
      <br />
      <br />
      <br />
      <Box bgcolor={"white"} p={3} borderRadius={4}>
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: "16px" }}
          className={classes.heading}
        >
          All Club Gallery
        </Typography>

        <TableContainer style={{ marginTop: "16px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Sr No</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="right">Img</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {filteredRows.map((row, index) => ( */}
              <TableRow>
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                ></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                {/* <TableCell align="center">
                  <IconButton aria-label="edit" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="delete" color="error">
                    <Delete />
                  </IconButton>
                </TableCell> */}
              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
