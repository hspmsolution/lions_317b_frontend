import React from "react";
// import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
// import useStyles from "./Styles";
// import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function BusinessDirectory() {
  // const classes = useStyles();

  const navigate = useNavigate();

  useEffect(() => {
    window.open("http://digicard.hspmsolutions.com/", "_blank");
    navigate("/");
  }, [navigate]);

  return (
    <>
    kl
      {/* <Box
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
        }}
      >
        <CustomizedBreadcrumbs
          label={"Membership"}
          subLabel={"Mini Directory"}
        />
        <Container sx={{ padding: "3rem 2rem" }}>
          <iframe
            src="/assets/MiniDirectory2023-24.pdf"
            title="Mini Directory"
            className={classes.businessPdfIframe}
          />
        </Container>
      </Box> */}
    </>
  );
}
