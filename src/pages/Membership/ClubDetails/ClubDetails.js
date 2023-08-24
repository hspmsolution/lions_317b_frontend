import React from "react";
import { Box, Container, Grid, Avatar } from "@mui/material";
import ProfileCard from "../memberDirectory/ProfileCard";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import "./styles.css";

function ClubDetails() {
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
          subLabel={"Lions 317 - B: Club Name - 12345 (club ID)"}
        />
        <Container fixed>
          <div className="customContainer">
            <div className="clubDetails">
              <h3>
                <b>About Club: </b>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Bibendum enim facilisis gravida neque convallis a cras semper
                auctor. Proin sagittis nisl rhoncus mattis rhoncus. Erat
                imperdiet sed euismod nisi. Eu mi bibendum neque egestas congue
                quisque egestas. Turpis tincidunt id aliquet risus feugiat in
                ante metus. Vivamus arcu felis bibendum ut tristique et egestas
                quis. Dis parturient montes nascetur ridiculus mus mauris vitae
                ultricies. Parturient montes nascetur ridiculus mus. Fermentum
                iaculis eu non diam phasellus. Felis imperdiet proin fermentum
                leo vel. Dignissim diam quis enim lobortis scelerisque fermentum
                dui faucibus in. Rhoncus dolor purus non enim praesent elementum
                facilisis. Euismod elementum nisi quis eleifend quam adipiscing
                vitae proin sagittis. Aliquet bibendum enim facilisis gravida
                neque convallis a cras. Sit amet nulla facilisi morbi tempus
                iaculis urna id. Vel turpis nunc eget lorem. Libero id faucibus
                nisl tincidunt eget nullam. Phasellus faucibus scelerisque
                eleifend donec pretium vulputate.
              </p>

              <p>
                Elementum sagittis vitae et leo duis ut. Turpis in eu mi
                bibendum neque egestas. Urna condimentum mattis pellentesque id
                nibh tortor id. Molestie a iaculis at erat pellentesque
                adipiscing. Porttitor massa id neque aliquam vestibulum morbi
                blandit. Eget nullam non nisi est sit. Sagittis orci a
                scelerisque purus semper. Facilisi etiam dignissim diam quis
                enim lobortis. Vitae auctor eu augue ut lectus arcu. Laoreet non
                curabitur gravida arcu.
              </p>
            </div>

            {/* Only PST TEAM fetch from new PST backend */}
            <div class="twelve">
              <h1>PST Team</h1>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ProfileCard />
                </Grid>

                <Grid item xs={4}>
                    <ProfileCard />
                </Grid>

                <Grid item xs={4}>
                    <ProfileCard />
                </Grid>

                <Grid item xs={4}>
                    <ProfileCard />
                </Grid>

                <Grid item xs={4}>
                    <ProfileCard />
                </Grid>

            </Grid>
            
            
          </div>
        </Container>
      </Box>
    </>
  );
}

export default ClubDetails;
