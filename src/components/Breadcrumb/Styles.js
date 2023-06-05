import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  breadcrumbCont: {
    height: "11rem",
    padding: "0 2rem",
    backgroundImage: "url('/assets/img/breadcrumbs.png')",
    backgroundSize: "600px",
    backgroundAttachment: "fixed",
    display: "flex",
    color: "white",
    position: "relative",
    // marginBottom: "3rem",
    "@media (min-width:300px)": {
      padding: 0,
    },
  },
  breadcrumb: {
    position: "absolute",
    bottom: "15px",
    right: "20px",
    "@media (min-width:300px)": {
      // right: '0'
    },
    "& .css-1wuw8dw-MuiBreadcrumbs-separator": {
      color: "white",
      fontWeight: "bold",
    },
  },
}));
