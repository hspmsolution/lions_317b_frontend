import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import createCache from "@emotion/cache";
import useStyles from "./Styles";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import { clubsData } from "../../../actions/clubs";
import ClubDirectorsTable from "./clubDirectors";
import { getClubDirector } from "../../../actions/activity";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const directoryCache = createCache({
  key: "directory-cache",
  prepend: true,
});

export default function EDirectory() {
  const responsive = "simple";
  const tableBodyMaxHeight = "";
  const searchBtn = true;
  const downloadBtn = true;
  const printBtn = false;
  const viewColumnBtn = false;
  const filterBtn = true;
  const classes = useStyles();

  const dispatch = useDispatch();
  const clubsAll = useSelector((state) => state.clubs.clubsData);
  const club_directors = useSelector((state) => state.activity.club_directors);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(clubsData());
    dispatch(getClubDirector({ fetchAll: true }));
  }, [dispatch]);

  const columns = [
    "Sr No.",
    {
      name: "Club Name",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const club = clubsAll[tableMeta.rowIndex];
          return (
            <Link
              to={`/club?id=${club.clubId}`}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              {value}
            </Link>
          );
        },
      },
    },
    "Club ID",
    "Total Members",
    "Region Name",
    "Zone Name",
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    selectableRows: "none", // Disable the checkbox column
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  const Clubs = () => {
    // const clubsAll = [];

    const data = clubsAll?.map((club, index) => [
      index + 1,
      club.clubName,
      club.clubId,
      club.totalMembers,
      club.regionName,
      club.zoneName,
    ]);

    return data;
  };

  const clubsTable = () => {
    return (
      <Container
        sx={{
          padding: { xs: "3rem 0.5rem", sm: "3rem 2rem", lg: "3rem 2rem" },
        }}
        className={classes.muiTableContainer}
      >
        <CacheProvider value={muiCache}>
          <ThemeProvider theme={createTheme()}>
            <MUIDataTable
              title={"All 317-B Clubs"}
              data={Clubs()}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </CacheProvider>
      </Container>
    );
  };

  const directorColumn = [
    "Sr No.",
    "Director Name",
    "Designation",
    "Club Name"
  ];

  const directors = () => {
    const data = club_directors?.map((member, index) => [
      index + 1,
      member.fullName,
      member.designation,
      member.clubName
    ]);

    return data;
  };

  const DirectorsTable = () => {
    return (
      <Container
        sx={{
          padding: { xs: "3rem 0.5rem", sm: "3rem 2rem", lg: "3rem 2rem" },
        }}
        className={classes.muiTableContainer}
      >
        <CacheProvider value={directoryCache}>
          <ThemeProvider theme={createTheme()}>
            <MUIDataTable
              title={"317-B Cabinet Officers"}
              data={directors()}
              columns={directorColumn}
              options={options}
            />
          </ThemeProvider>
        </CacheProvider>
      </Container>
    );
  };

  const accordianData = [
    { name: "LIONS-317B CLUBS", component: clubsTable() },
    { name: "CABINET OFFICERS OF LIONS-317B", component: DirectorsTable() },
  ];
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
          label={"Membership"}
          subLabel={"E - Directory"}
        />
        {accordianData.map((data, index) => (
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            key={index}
            sx={{
              backgroundColor: "rgb(0 0 0 / 4%)",
              borderRadius: "1rem",
              margin: "3rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ display: { sm: "block", md: "flex" } }}
            >
              {/* <Typography
              variant="h4"
              sx={{
                width: "40%",
                flexShrink: 0,
                color: "rgba(29, 60, 122, 0.9)",
                fontSize: { xs: "0.8rem", md: "1.25rem" },
              }}
            >
              {"region.name"}
            </Typography> */}
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.7rem", md: "1rem" },
                  fontWeight: "bold",
                }}
              >
                {data.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "3rem",
                justifyContent: "center",
                borderRadius: "0 0 1rem 1rem",
              }}
            >
              {data.component}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
