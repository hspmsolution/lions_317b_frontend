// import { Timeline } from '@mui/icons-material';
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import StarsIcon from "@mui/icons-material/Stars";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import useStyles from "./Styles";
import { Box, Typography } from "@mui/material";
import { topClubs } from "../../../actions/client";
import TimelineDot from "@mui/lab/TimelineDot";
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

// const styles = {
//   six: {
//     textAlign: "center",
//     color: "#222",
//     fontWeight: 400,
//     textTransform: "uppercase",
//     wordSpacing: 1,
//     letterSpacing: 2,
//     color: "#c50000",
//     position: "relative",
//     margin: "0.5rem",
//   },
//   sixH1: {
//     paddingBottom: 15,
    
//     color: "#999",
//     wordSpacing: 1,
//     letterSpacing: "none",
//   },
//   sixH1After: {
//     position: "absolute",
//     left: 0,
//     bottom: 0,
//     width: 45,
//     height: 4,
//     content: "",
//     right: 45,
//     margin: "auto",
//     backgroundColor: "#ccc",
//   },
//   sixH1Before: {
//     left: 45,
//     bottom: 0,
//     width: 90,
//     height: 4,
//     content: "",
//     margin: "auto",
//     backgroundColor: "#d78b8b",
//   },
// };

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
          backgroundImage: "url('https://lions317b.org/api/static/assets/1688063886568-background.png')",
          backgroundAttachment: "fixed",
        }}
        className="rankContainer">
        <Typography
          variant="h2"
          className="clubRankH">
          <span style={{ color: "#0157ac" }}>Top </span>
          <span style={{ color: "#cd0000" }}>10 </span>
          <span style={{ color: "#4c8d00" }}>District </span>
          <span style={{ color: "#4c8d00" }}>Clubs </span>
          <span style={{ color: "#2c025f" }}>Rank</span>
        </Typography>

        <Box
          className={classes.rankRow}
          sx={{
            display: { xs: "block", md: "flex" },
            padding: { xs: "0", md: " 0 2rem" },
          }}>
          <div className={classes.rankColumn}>
            <Timeline
              position="alternate"
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.8,
                },
                // width: "50%",
              }}>
              <Box marginBottom={"1.3rem"}>
                <Typography
                  textAlign={"center"}
                  variant="h4"
                  sx={{ color: "rgba(29, 60, 122, 0.85)", margin: "1rem 0" }}
                  className="timelineH">
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
                        backgroundColor: "rgba(29, 60, 122, 0.85)",
                        borderRadius: "1rem",
                      }}>
                      <Typography
                        variant="h6"
                        component="span"
                        color="white">
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
              }}>
              <Box marginBottom={"1.3rem"}>
                <Typography
                  textAlign={"center"}
                  variant="h4"
                  sx={{ color: "rgba(29, 60, 122, 0.85)", margin: "1rem 0" }}
                  className="timelineH">
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
                      }}>
                      <Typography
                        variant="h6"
                        component="span"
                        color="white">
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

