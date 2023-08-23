import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import ResourcesTable from "./ResourcesTable";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { downloadResources } from "../../../actions/client";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Download() {
  const files = useSelector((state) => state.client.resourceData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(downloadResources());
  }, []);
  const districtFiles = files
    .filter((row) => row.category === "district")
    .filter(Boolean);
    
  const internationalFiles = files
    .filter((row) => row.category === "international")
    .filter(Boolean);
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
        <CustomizedBreadcrumbs label={"Resources"} subLabel={"Downloads"} />
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Item>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ textAlign: "center", mb: "1rem" }}
                    >
                      District Resources
                    </Typography>
                    <ResourcesTable rows={districtFiles} />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ textAlign: "center", mb: "1rem" }}
                    >
                      International Resources
                    </Typography>
                    <ResourcesTable rows={internationalFiles} />
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
