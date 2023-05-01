import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Team.css";

function Team() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/img/bggg.png')",
        backgroundAttachment: "fixed",
        pb: "2rem",
      }}
    >
      <Container>
        <Typography variant="h2" className="team-h">
          Our District Team
        </Typography>

        <Grid container className="teamGridContainer">
          {/*
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/logo.png"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Lion's Name</h3>
                            <p>Cabinet Treasurer</p>

                        </div>
                    </Grid>
*/}

          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt="" src="/assets/img/dist-team/team-image.jpg" />
            </div>
            <div className="team-card-body">
              <h3>Name, ABCD</h3>
              <p>Designation</p>
            </div>
          </Grid>
          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt="" src="/assets/img/dist-team/team-image.jpg" />
            </div>
            <div className="team-card-body">
              <h3>Name, ABCD</h3>
              <p>Designation</p>
            </div>
          </Grid>
          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt="" src="/assets/img/dist-team/team-image.jpg" />
            </div>
            <div className="team-card-body">
              <h3>Name, ABCD</h3>
              <p>Designation</p>
            </div>
          </Grid>
          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt="" src="/assets/img/dist-team/team-image.jpg" />
            </div>
            <div className="team-card-body">
              <h3>Name, ABCD</h3>
              <p>Designation</p>
            </div>
          </Grid>
          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt="" src="/assets/img/dist-team/team-image.jpg" />
            </div>
            <div className="team-card-body">
              <h3>Name, ABCD</h3>
              <p>Designation</p>
            </div>
          </Grid>
          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt="" src="/assets/img/dist-team/team-image.jpg" />
            </div>
            <div className="team-card-body">
              <h3>Name, ABCD</h3>
              <p>Designation</p>
            </div>
          </Grid>
          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt="" src="/assets/img/dist-team/team-image.jpg" />
            </div>
            <div className="team-card-body">
              <h3>Name, ABCD</h3>
              <p>Designation</p>
            </div>
          </Grid>
          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt="" src="/assets/img/dist-team/team-image.jpg" />
            </div>
            <div className="team-card-body">
              <h3>Name, ABCD</h3>
              <p>Designation</p>
            </div>
          </Grid>
          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt="" src="/assets/img/dist-team/team-image.jpg" />
            </div>
            <div className="team-card-body">
              <h3>Name, ABCD</h3>
              <p>Designation</p>
            </div>
          </Grid>

          {/*
          <Grid item className="team-card-container">
            <div className="team-card-header">
              <img alt='' src="/assets/img/dist-team/12_Shobha%20Srinivas.jpeg" />
            </div>
            <div className="team-card-body">
              <h3>Shobha Srinivas</h3>
              <p>Family & Women Membership</p>

            </div>
          </Grid>
*/}
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;
