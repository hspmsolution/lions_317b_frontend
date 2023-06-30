import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import ResourcesTable from "./ResourcesTable";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function createData(name, src) {
  return { name, src };
}

const rows = [
  createData("file1"),
  createData("file2"),
  createData("file3"),
  createData("file4"),
  createData("file5"),
];

export default function Download() {
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
        }}>
        <CustomizedBreadcrumbs
          label={"Resources"}
          subLabel={"Downloads"}
        />
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            padding: { xs: "3rem 0.5rem", sm: "3rem 2rem", lg: "3rem 2rem" },
          }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={5}>
              <Grid
                item
                xs={12}
                md={6}>
                <Item
                  sx={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  }}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: "center",
                        mb: "1rem",
                        color: "rgba(29, 60, 122, 1)",
                      }}>
                      District Resources
                    </Typography>
                    <ResourcesTable rows={rows} />
                  </Box>
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}>
                <Item
                  sx={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  }}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: "center",
                        mb: "1rem",
                        color: "rgba(29, 60, 122, 1)",
                      }}>
                      International Resources
                    </Typography>
                    <ResourcesTable rows={rows} />
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
