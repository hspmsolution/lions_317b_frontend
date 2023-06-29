import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import "./Team.css";

const teamData = [
  {
    src: "https://lions317b.org/api/static/assets/1688062877612-01-erle.jpg",
    name: "Erle Brito",
    sub_design: "PMJF",
    designation: "District Governor",
  },
  {
    src: "https://lions317b.org/api/static/assets/1688062947139-02-sugalla.jpeg",
    name: "Sugalla Yellamali",
    sub_design: "",
    designation: "Immediate Past District Governor",
  },
  {
    src: "https://lions317b.org/api/static/assets/1688063064447-03-manoj.jpeg",
    name: "Manoj Manek",
    sub_design: "MJF",
    designation: "First Vice District Governor",
  },
  {
    src: "https://lions317b.org/api/static/assets/1688063097222-04-jai.jpeg",
    name: "Jai Amol Naik",
    sub_design: "MJF",
    designation: "Second Vice District Governor",
  },
  {
    src: "https://lions317b.org/api/static/assets/1688063143562-05-adhwinikumar.jpeg",
    name: "Adhwinikumar B Karpe",
    sub_design: "   ",
    designation: "Cabinet Secretary",
  },
  {
    src: "https://lions317b.org/api/static/assets/1688063205171-06-satpal.jpeg",
    name: "Satpal Chorge",
    sub_design: "",
    designation: "Cabinet Treasurer",
  },
  {
    src: "https://lions317b.org/api/static/assets/1688063253552-07-mahesh.jpeg",
    name: "Mahesh Darbar",
    sub_design: "",
    designation: "Global Leadership Team",
  },
  {
    src: "https://lions317b.org/api/static/assets/1688063679898-08-sameer.jpeg",
    name: "Sameer Surlakar",
    sub_design: "",
    designation: "Global Membership Team",
  },
  {
    src: "https://lions317b.org/api/static/assets/1688063366913-09-bharati.jpeg",
    name: "Bharati Vadavi",
    sub_design: "",
    designation: "Global Service Team",
  },
  {
    src: "https://lions317b.org/api/static/assets/1688063423236-10-illyas.jpeg",
    name: "Illyas Rajabali",
    sub_design: "",
    designation: "Global Extension Team",
  },

  {
    src: "https://lions317b.org/api/static/assets/1688063476053-11-vinod.jpeg",
    name: "Vinod Jain",
    sub_design: " ",
    designation: "Additional Cabinet Secretary",
  },

  {
    src: "https://lions317b.org/api/static/assets/1688063532307-12-ndemi.jpeg",
    name: "NDEMI OTIENO",
    sub_design: " ",
    designation: "Assistant Cabinet Secretary",
  },
];

function Team() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://lions317b.org/api/static/assets/1688063886568-background.png')",
        backgroundAttachment: "fixed",
        pb: "2rem",
      }}
      className="teamsContainer">
      <Container>
        <Typography
          variant="h2"
          className="team-h">
          Our District Team
        </Typography>
        <Grid
          container
          className="main">
          {teamData.map((member, index) => {
            return (
              <Grid
                item
                key={index}>
                <Paper
                  elevation={3}
                  className="profile-card">
                  <div className="img">
                    <img
                      alt=""
                      src={member.src}
                    />
                    <div className="caption">
                      <h3>{member.name}</h3>
                      <h4>{member.sub_design}</h4>
                      <p>{member.designation}</p>
                    </div>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;
