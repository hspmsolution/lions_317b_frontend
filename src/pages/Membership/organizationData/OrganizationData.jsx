import React, { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import useStyles from "./Styles";
import { getMembers } from "../../../actions/member";
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

export default function OrganizationData() {
  const responsive = "simple";
  const tableBodyMaxHeight = "";
  const searchBtn = true;
  const downloadBtn = true;
  const printBtn = false;
  const viewColumnBtn = false;
  const filterBtn = true;
  const classes = useStyles();

  const columns = [
    "Sr No.",
    "Title",
    { name: "Full Name", options: { filterOptions: { fullWidth: true } } },
    "Club Name",
    "Occupation",
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
  const Members = () => {
    const dispatch = useDispatch();
    const membersD = useSelector((state) => state.clubMembers.memberDirectory);

    useEffect(() => {
      dispatch(getMembers());
    }, [dispatch]);

    const data = membersD.map((member, index) => [
      index + 1,
      member.title,
      member.fullName,
      member.clubName,
      member.Occupation,
    ]);

    return data;
  };

  return (
    <div className="memberTable">
      <Box
        sx={{
          backgroundImage: "url('https://lions317b.org/api/static/assets/1688063886568-background.png')",
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
          label={"Membership"}
          subLabel={"Organization Data"}
        />
        <Container
          sx={{
            padding: { xs: "3rem 0.5rem", sm: "3rem 2rem", lg: "3rem 2rem" },
          }}
          className={classes.muiTableContainer}>
          <CacheProvider value={muiCache}>
            <ThemeProvider theme={createTheme()}>
              <MUIDataTable
                // title={"Member Directory"}
                data={Members()}
                columns={columns}
                options={options}
              />
            </ThemeProvider>
          </CacheProvider>
        </Container>
      </Box>
    </div>
  );
}
