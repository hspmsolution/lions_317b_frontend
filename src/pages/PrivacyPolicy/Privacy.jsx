import CustomizedBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

function Privacy() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/img/newbg02.png')",
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
        minHeight: "100vh",
      }}
    >
      <CustomizedBreadcrumbs label={"Privacy Policies"} />
      <Container
        sx={{
          padding: "3rem 2rem",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
          }}
        >
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed
            quisquam accusantium, explicabo nostrum eaque sapiente, ipsa quis
            corporis sunt facere sit voluptate repellendus omnis voluptas
            commodi totam aliquid inventore? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eveniet ratione harum placeat
            architecto aut quibusdam inventore tempora, suscipit in animi culpa
            exercitationem numquam ab tenetur ut eaque, recusandae repellendus
            distinctio.
          </Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed
            quisquam accusantium, explicabo nostrum eaque sapiente, ipsa quis
            corporis sunt facere sit voluptate repellendus omnis voluptas
            commodi totam aliquid inventore? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eveniet ratione harum placeat
            architecto aut quibusdam inventore tempora, suscipit in animi culpa
            exercitationem numquam ab tenetur ut eaque, recusandae repellendus
            distinctio.
          </Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed
            quisquam accusantium, explicabo nostrum eaque sapiente, ipsa quis
            corporis sunt facere sit voluptate repellendus omnis voluptas
            commodi totam aliquid inventore? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eveniet ratione harum placeat
            architecto aut quibusdam inventore tempora, suscipit in animi culpa
            exercitationem numquam ab tenetur ut eaque, recusandae repellendus
            distinctio.
          </Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed
            quisquam accusantium, explicabo nostrum eaque sapiente, ipsa quis
            corporis sunt facere sit voluptate repellendus omnis voluptas
            commodi totam aliquid inventore? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eveniet ratione harum placeat
            architecto aut quibusdam inventore tempora, suscipit in animi culpa
            exercitationem numquam ab tenetur ut eaque, recusandae repellendus
            distinctio.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Privacy;
