import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useStyles from "./Styles";
import Register from "./Register";
import { events } from "../../actions/client";
import { API_URL } from "../../api";
import CustomizedBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import CommonCard from "../.././components/CommonCard/CommonCard";
import ImageSlider, { Slide } from "react-auto-image-slider";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function ResponsiveDialog({
  type,
  title,
  date,
  bgImage,
  description,
  activityId,
}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [showRegister, setShowRegister] = React.useState(false);

  const handleClick = () => {
    setShowRegister(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowRegister(false);
  };
  const classes = useStyles();
  return (
    <div>
      <Box sx={{}}>
        <Button
          // variant="outlined"
          onClick={handleClickOpen}
          sx={{
            color: "white",
            backgroundColor: "rgba(29, 60, 122, 0.85)",
            "&:hover": {
              backgroundColor: "rgba(29, 60, 122, 0.85)",
            },
          }}
        >
          Open Activity Details
        </Button>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"none"}
        sx={{ margin: "auto" }}
        className={classes.dialog}
      >
        <DialogTitle id="responsive-dialog-title">
          {type === "past"
            ? "Past Activities by Club"
            : "Upcoming Activities by Club"}
        </DialogTitle>

        <DialogContent>
          <Paper
            variant="outlined"
            sx={{
              padding: "0.5rem",
              margin: "auto",
              width: "100%",
            }}
            className={classes.dialogPaper}
          >
            <img
              src={API_URL + bgImage}
              alt="helping"
              style={{ width: "900px", height: "100%" }}
            />
          </Paper>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className={classes.dialogTitle}>
                    <strong>Activity Title:</strong>
                  </TableCell>
                  <TableCell>{title}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className={classes.dialogTitle}>
                    <strong>Activity Date:</strong>
                  </TableCell>
                  <TableCell>{date?.slice(0, 10)}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong className={classes.dialogTitle}>
                      Activity Type:
                    </strong>
                  </TableCell>
                  <TableCell>{type}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className={classes.dialogTitle}>
                    <strong>Activity Category:</strong>
                  </TableCell>
                  <TableCell>Catergory</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className={classes.dialogTitle}>
                    <strong>Activity Place:</strong>
                  </TableCell>
                  <TableCell>Place</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className={classes.dialogTitle}>
                    <strong> Activity Description:</strong>
                  </TableCell>
                  <TableCell>{description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
          >
            Close
          </Button>
          {type === "upcoming" && (
            <Button
              onClick={handleClick}
              autoFocus
            >
              Register
            </Button>
          )}
          {showRegister && <Register activityId={activityId} />}
        </DialogActions>
      </Dialog>
    </div>
  );
}

function BasicCard({ title, bgImage, type, date, description, activityId }) {
  const classes = useStyles();

  return (
    <Card
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
    >
      <CardContent className={classes.eventCard}>
        <Box>
          <CommonCard
            image={API_URL + bgImage}
            date={date?.slice(0, 10)}
          />
        </Box>

        <ResponsiveDialog
          type={type}
          title={title}
          date={date}
          bgImage={bgImage}
          description={description}
          activityId={activityId}
        />
      </CardContent>
    </Card>
  );
}

export default function Events() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.client.events);
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(events());
  }, []);

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
          pb: "2rem",
        }}
      >
        <CustomizedBreadcrumbs label={"Activities"} />
        <Container
          className={classes.activityContainer}
          sx={{ margin: "3rem auto" }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center",}}
            className="heading11"
          >
            Upcoming Activities
          </Typography>

          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <Box
                sx={{
                  p: '3rem 2rem',
                  display: "grid",
                  gridTemplateColumns: { md: "4fr 4fr 4fr" },
                  gap: 4,
                }}
              >
                {activities?.upcoming?.length === 0 ? (
                  <Typography
                    variant="h6"
                    color="green"
                    sx={{borderBottom:'3px solid green'}}
                    textAlign={"center"}
                  >
                    No Upcoming Activity Found
                  </Typography>
                ) : (
                  activities?.upcoming?.map((filter, index) => (
                    <Box key={index}>
                      <BasicCard
                        title={filter.activityTitle}
                        bgImage={filter.image_path}
                        date={filter.date}
                        type="upcoming"
                        description={filter.description}
                        activityId={filter.activityId}
                      />
                    </Box>
                  ))
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ margin: "3rem auto" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center",}}
            className="heading11"
          >
            Past Activities
          </Typography>

          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <Box
                sx={{
                  p: '3rem 2rem',
                  display: "grid",
                  gridTemplateColumns: { md: "4fr 4fr 4fr" },
                  gap: 4,
                }}
              >
                {activities?.past?.length === 0 ? (
                  <Typography
                    variant="h6"
                    color="black"
                  >
                    No Past Activity Found
                  </Typography>
                ) : (
                  activities?.past?.map((filter, index) => (
                    <Box key={index}>
                      <BasicCard
                        title={filter.activityTitle}
                        bgImage={filter.image_path}
                        date={filter.date}
                        type="past"
                        description={filter.description}
                        activityId={filter.activityId}
                      />
                    </Box>
                  ))
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
