import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import useStyles from "./Styles";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import { clubsData } from "../../../actions/clubs";

const muiCache = createCache({
  key: "mui-datatables",
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

  useEffect(() => {
    dispatch(clubsData());
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
      </Box>
          
    </>
  );
}
