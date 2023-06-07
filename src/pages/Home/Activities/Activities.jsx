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
          backgroundImage: "url('/assets/img/newbg02.png')",
          backgroundAttachment: "fixed",
          padding: "1rem",
          textAlign: "center",
        }}
        className="activityContainer"
      >
        <h1 className="activityHeading">Activities</h1>

        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{
            padding: { xs: "0", md: "2rem 3rem", lg: " 2rem 5rem" },
            marginTop: "0",
          }}
        >
          {activities.recent?.slice(0, 6).map((item, index) => {
            return (
              <>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
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
                    position={"relative"}
                    className={classes.activityCard}
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
        {/* </Paper> */}

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
