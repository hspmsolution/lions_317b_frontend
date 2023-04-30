import * as React from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import { Box, Button, Container, Paper } from "@mui/material";
import ImageSlider, { Slide } from "react-auto-image-slider";
import useStyles from "./Styles";
import "./Activities.css";
import { events } from "../../../actions/client";
import ActivityCard from "../../../components/ActivityCard/ActivityCard";
import { Carousel } from 'react-carousel-minimal';
import Chip from '@mui/material/Chip';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Activities() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activities = useSelector((state) => state.client.events);
  React.useEffect(() => {
    dispatch(events());
  }, []);

  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                  activity 1
                  <br/>
                  desc
                </div>`
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "activity 2"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "activity 3"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "activity 4"
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <>
      <Box
        sx={{
          background: "#112E57",
          paddingBottom: "2rem",
          textAlign: "center",
        }}
      >
        <Paper
          className={classes.activitiesCont}
          sx={{ display: { xs: "block", md: "flex", width: "100%" } }}
        >
          <Box
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 1,
              minWidth: "50%",
              borderRadius: "sm",
              padding: "2rem 2rem 4rem",
            }}
          >
            <Typography variant="h4" className={classes.activeH}>
              Past Activities
            </Typography>
            <div className={classes.activityCarouselDiv}>
              <Carousel
                data={data}
                time={4000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                captionPosition="bottom"
                automatic={true}
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                showNavBtn={false}
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                }}
              />
              <Chip icon={<CalendarTodayIcon />} label='dd/mm/yyyy' sx={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#919eab96' }} />
            </div>
          </Box>
          <Box
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 1,
              minWidth: "50%",
              borderRadius: "sm",
              padding: "2rem 2rem 4rem",
            }}
          >
            <Typography variant="h4" className={classes.activeH}>
              Upcoming Activities
            </Typography>
            <List sx={{ py: "var(--ListDivider-gap)" }}>
              <div className="imageSlider imageSliderX">
                <ImageSlider>
                  {activities?.upcoming?.map((item, index) => (
                    <Slide>
                      <ActivityCard key={index} item={item} />
                    </Slide>
                  ))}
                </ImageSlider>
              </div>
            </List>
          </Box>
        </Paper>
        <Button
          onClick={() => { navigate("/activities") }}
          variant="outlined"
          size="medium"
          sx={{ color: "white", borderColor: "white" }}
        >
          View More
        </Button>
      </Box>
    </>
  );
}
