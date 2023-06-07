// import { Timeline } from '@mui/icons-material';
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import StarsIcon from "@mui/icons-material/Stars";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import useStyles from "./Styles";
import { Box, Typography } from "@mui/material";
import { topClubs } from "../../../actions/client";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import "./rank.css";

const clubRankings = [
  { name: "PUNE AGRASEN", points: 297 },
  { name: "POONA SARASBAUG", points: 222 },
  { name: "PUNE PRABHAT", points: 219 },
  { name: "NASHIK ROYALS", points: 200 },
  { name: "POONA", points: 198 },
  { name: "POONA CENTRAL", points: 166 },
  { name: "TALEGAON", points: 150 },
  { name: "KOPERGAON", points: 144 },
];

const styles = {
  six: {
    textAlign: "center",
    color: "#222",
    // fontSize: 30,
    fontWeight: 400,
    textTransform: "uppercase",
    wordSpacing: 1,
    letterSpacing: 2,
    color: "#c50000",
    position: "relative",
    margin: "0.5rem",
  },
  sixH1: {
    paddingBottom: 15,
    // textTransform: "none",
    // fontSize: "1.6rem",
    // fontWeight: "normal",
    // fontStyle: "italic",
    // fontFamily: '"Playfair Display","Bookman",serif',
    color: "#999",
    // letterSpacing: "-0.005em",
    wordSpacing: 1,
    letterSpacing: "none",
  },
  sixH1After: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 45,
    height: 4,
    content: "",
    right: 45,
    margin: "auto",
    backgroundColor: "#ccc",
  },
  sixH1Before: {
    left: 45,
    bottom: 0,
    width: 90,
    height: 4,
    content: "",
    margin: "auto",
    backgroundColor: "#d78b8b",
  },
};

export default function OppositeContentTimeline() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const clubs = useSelector((state) => state.client.topClubs);

  React.useEffect(() => {
    dispatch(topClubs());
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/newbg02.png')",
          backgroundAttachment: "fixed",
        }}
        className="rankContainer"
      >
        <Typography
          variant="h2"
          className="clubRankH"
        >
          Top 10 District Clubs Rank
        </Typography>
        {/* <div className="six">
          <h1 style={styles.six}>
            <span
              style={styles.sixH1}
              className="rankHeading"
            >
              By Admin Reporting
            </span>
            <div style={styles.sixH1Before}></div>
            <div style={styles.sixH1After}></div>
          </h1>
        </div> */}

        <Box
          className={classes.rankRow}
          sx={{
            display: { xs: "block", md: "flex" },
            padding: { xs: "0", md: " 0 2rem" },
          }}
        >
          <div className={classes.rankColumn}>
            <Timeline
              position="alternate"
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.8,
                },
                // width: "50%",
              }}
            >
              <Box marginBottom={"1.3rem"}>
                <Typography
                  textAlign={"center"}
                  variant="h4"
                  sx={{ color: "rgba(29, 60, 122, 0.85)", margin: "1rem 0" }}
                  className="timelineH"
                >
                  Activity Reporting
                </Typography>
              </Box>
              {clubs.slice(0, clubs.length / 2).map((ranking, index) => (
                <>
                  <TimelineItem>
                    <TimelineSeparator>
                      {/* <TimelineConnector /> */}
                      <TimelineDot sx={{ backgroundColor: "white" }}>
                        <StarsIcon
                          sx={{
                            color: "#d4bc36",
                            width: "1.5em",
                            height: "1.5em",
                          }}
                        />
                      </TimelineDot>

                      {clubs.length !== clubs.length / 2 ? (
                        <TimelineConnector
                          sx={{
                            height: "30px",
                            backgroundColor: "rgba(29, 60, 122, 0.85)",
                          }}
                        />
                      ) : (
                        " "
                      )}
                      {/* <TimelineConnector
                        sx={{
                          height: "30px",
                          backgroundColor: "rgba(29, 60, 122, 0.85)",
                        }}
                      /> */}
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        py: "12px",
                        // px: 2,
                        backgroundColor: "rgba(29, 60, 122, 0.85)",
                        // margin: "6px",
                        borderRadius: "1rem",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="span"
                        color="white"
                      >
                        {ranking.adminstars}
                      </Typography>
                      <Typography color="white">{ranking.clubName}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </>
              ))}
            </Timeline>
          </div>
          <div className={classes.rankColumn}>
            <Timeline
              position="alternate"
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.8,
                },
                // width: "50%",
              }}
            >
              <Box marginBottom={"1.3rem"}>
                <Typography
                  textAlign={"center"}
                  variant="h4"
                  sx={{ color: "rgba(29, 60, 122, 0.85)", margin: "1rem 0" }}
                  className="timelineH"
                >
                  Admin Reporting
                </Typography>
              </Box>
              {clubs.slice(clubs.length / 2).map((ranking, index) => (
                <>
                  <TimelineItem>
                    <TimelineSeparator>
                      {/* <TimelineConnector /> */}
                      <TimelineDot sx={{ backgroundColor: "white" }}>
                        <StarsIcon
                          sx={{
                            color: "#d4bc36",
                            width: "1.5em",
                            height: "1.5em",
                          }}
                        />
                      </TimelineDot>
                      <TimelineConnector
                        sx={{
                          height: "30px",
                          backgroundColor: "rgba(29, 60, 122, 0.85)",
                        }}
                      />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        py: "12px",
                        px: 2,
                        backgroundColor: "rgba(29, 60, 122, 0.85)",
                        // margin: "6px",
                        borderRadius: "1rem",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="span"
                        color="white"
                      >
                        {ranking.adminstars}
                      </Typography>
                      <Typography color="white">{ranking.clubName}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </>
              ))}
            </Timeline>
          </div>
        </Box>
      </Box>
    </>
  );
}

{
  /*
<TimelineItem>
                     <TimelineOppositeContent color="textSecondary">
                      {ranking.adminstars}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <StarsIcon sx={{ color: "#d4bc36" }} />
                      {index !== clubRankings.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>{ranking.clubName}</TimelineContent>
                  </TimelineItem>
                </>
              ))}
            </Timeline>
          </div>
          <div className={classes.rankColumn}>
            <Timeline
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.8,
                },
                minWidth: "50%",
              }}
            >
              {clubs.slice(clubs.length / 2).map((ranking, index) => (
                <>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      {ranking.adminstars}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <StarsIcon sx={{ color: "#d4bc36" }} />
                      {index !== clubRankings.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>{ranking.clubName}</TimelineContent>
                  </TimelineItem> */
}
