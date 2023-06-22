import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import { Box, Container, Typography } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import ZoneTable from "./ZoneTable";
import { districtData } from "../../../actions/client";
import "./OrgChart.css";

export default function OrgChart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.client.districtData);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  React.useEffect(() => {
    dispatch(districtData());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/assets/img/newbg02.png)",
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
        <CustomizedBreadcrumbs label={"Organization Chart"} />
        <Container
          sx={{
            padding: { xs: "3rem 0.5rem", sm: "3rem 2rem", lg: "3rem 2rem" },
          }}>
          {data.map((region, index) => (
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              key={index}
              sx={{ backgroundColor: "rgb(0 0 0 / 4%)", borderRadius: "1rem" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ display: { sm: "block", md: "flex" } }}>
                <Typography
                  variant="h4"
                  sx={{
                    width: "40%",
                    flexShrink: 0,
                    color: "rgba(29, 60, 122, 0.9)",
                    fontSize: { xs: "0.8rem", md: "1.25rem" },
                  }}>
                  {region.name}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.7rem", md: "1rem" },
                    fontWeight: "bold",
                  }}>
                  Region Chairperson: {region.chairPerson}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "3rem",
                  justifyContent: "center",
                  borderRadius: "0 0 1rem 1rem",
                }}>
                {region.zones?.map((zone, i) => (
                  <ZoneTable
                    zone={zone}
                    key={i}
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  );
}
