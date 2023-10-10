import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../memberDirectory/ProfileCard";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import { useNavigate, useLocation } from "react-router-dom";
import { clubDetails } from "../../../actions/clubs";
import "./styles.css";
import Activities from "../../Activities/Activities";
import Gallery from "../../../components/Gallery/Gallery";
import { projectDetails } from "../../../actions/activity";

function ClubDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const clubId = parseInt(queryParams.get("id")) || null;

  const clubInfo = useSelector((state) => state.clubs.clubDetails);
  const projects = useSelector((state) => state.activity.projects);

  useEffect(() => {
    dispatch(clubDetails(clubId));
    dispatch(projectDetails(clubId));
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url('https://lions317b.org/api/static/assets/1688063886568-background.png')",
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
        }}
      >
        <CustomizedBreadcrumbs
          label={"Club Details"}
          subLabel={`Lions 317 - B: ${clubInfo?.club?.clubName} - ${clubInfo?.club?.clubId}`}
        />
        <Container fixed>
          <div className="customContainer">
            <div className="clubDetails">
              <h3>
                <b>About Club: </b>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: clubInfo?.club?.about,
                }}
              />
            </div>

            {/* Only PST TEAM fetch from new PST backend */}
            <div class="twelve">
              <h1>PST Team</h1>
            </div>
            <Grid container spacing={2}>
              {clubInfo?.pst?.map((member, index) => (
                <Grid item xs={4} key={index}>
                  <ProfileCard
                    fullName={member.fullName}
                    title={member.title}
                    clubName={member.clubName}
                    phone={member.phone}
                    image={member.profilePicture}
                    address={member.address1}
                  />
                </Grid>
              ))}
            </Grid>
            <div className="clubDetails">
              <h3>
                <b>Permanent Projects:</b>
              </h3>
              <Gallery data={projects}/>
            </div>  
            <Activities clubId={clubId}/>
          </div>
        </Container>
      </Box>
    </>
  );
}

export default ClubDetails;
