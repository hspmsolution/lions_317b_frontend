import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import "./Team.css";

const teamData = [
  {
    src: "/assets/dist_img/01_Erle.jpg",
    name: "Erle Brito",
    sub_design: "PMJF",
    designation: "District Governor",
  },
  {
    src: "/assets/dist_img/06_Sugalla.jpeg",
    name: "Sugalla Yellamali",
    sub_design: "",
    designation: "Immediate Past District Governor",
  },
  {
    src: "/assets/dist_img/15_manoj.jpeg",
    name: "Manoj Manek",
    sub_design: "MJF",
    designation: "First Vice District Governor",
  },
  {
    src: "/assets/dist_img/03_Jai.jpeg",
    name: "Jai Amol Naik",
    sub_design: "MJF",
    designation: "Second Vice District Governor",
  },
  {
    src: "/assets/dist_img/07_Adhwinikumar.jpeg",
    name: "Adhwinikumar B Karpe",
    sub_design: "   ",
    designation: "Cabinet Secretary",
  },
  {
    src: "/assets/dist_img/09_Satpal.jpeg",
    name: "Satpal Chorge",
    sub_design: "",
    designation: "Cabinet Treasurer",
  },
  {
    src: "/assets/dist_img/10_Mahesh.jpeg",
    name: "Mahesh Darbar",
    sub_design: "",
    designation: "Global Leadership Team",
  },
  {
    src: "/assets/dist_img/Sameer.jpeg",
    name: "Sameer Surlakar",
    sub_design: "",
    designation: "Global Membership Team",
  },
  {
    src: "/assets/dist_img/11_Bharati.jpeg",
    name: "Bharati Vadavi",
    sub_design: "",
    designation: "Global Service Team",
  },
  {
    src: "/assets/dist_img/14_Illyas.jpeg",
    name: "Illyas Rajabali",
    sub_design: "",
    designation: "Global Extension Team",
  },

  {
    src: "/assets/dist_img/12_Vinod.jpeg",
    name: "Vinod Jain",
    sub_design: " ",
    designation: "Additional Cabinet Secretary",
  },

  {
    src: "/assets/dist_img/13_Ndemi.jpeg",
    name: "NDEMI OTIENO",
    sub_design: " ",
    designation: "Assistant Cabinet Secretary",
  },
];

function Team() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/img/newbg02.png')",
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
