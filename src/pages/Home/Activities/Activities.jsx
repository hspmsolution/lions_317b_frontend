import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Paper } from "@mui/material";
import { events } from "../../../actions/client";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { API_URL } from "../../../api";
import useStyles from "./Styles";
import "./styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Activities() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activities = useSelector((state) => state.client.events);
  React.useEffect(() => {
    dispatch(events());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          // background: "#112E57",
          backgroundImage: "url('/assets/img/newbg02.png')",
          backgroundAttachment: "fixed",
          padding: "1rem",
          textAlign: "center",
        }}
        className="activityContainer"
      >
        <h1 className="activityHeading">Activities</h1>

        <Paper
          className={classes.activitiesCont}
          sx={{
            display: {
              xs: "block",
              md: "flex",
              width: "80%",
              margin: "auto",
              paddingTop: "2rem",
              backgroundColor: "transparent",
            },
          }}
        >
          {/* New Activity */}

          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {activities.recent?.slice(0, 4).map((item, index) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    position={"relative"}
                  >
                    <Box
                      sx={{
                        backgroundColor: "rgba(29, 60, 122, 0.85)",
                        borderRadius: "1rem",
                        paddingBottom: "1rem",
                        color: "white",
                        cursor: "pointer",
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                        "&:hover": {
                          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        },
                      }}
                      onClick={() => {
                        navigate("/activities");
                      }}
                    >
                      <img
                        src={`${API_URL + item?.image_path}`}
                        className={classes.activityImage}
                        alt="Activity"
                      />
                      <h3>{item.heading}Heading</h3>
                      <p>{item.description}Description</p>
                      <p className={classes.activityDate}>
                        {item?.date?.slice(0, 10)}
                      </p>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Paper>

        <Button
          onClick={() => {
            navigate("/activities");
          }}
          variant="outlined"
          size="medium"
          sx={{
            color: "rgba(29, 60, 122, 0.85)",
            borderColor: "rgba(29, 60, 122, 0.85)",
            marginTop: "2rem",
          }}
          className="activityButton"
        >
          View All &nbsp;
          <ArrowForwardIcon />
        </Button>
      </Box>
    </>
  );
}
