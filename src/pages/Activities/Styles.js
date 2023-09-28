import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  activityContainer: {
    margin: "3rem auto",
  },
  eventCard: {
    padding: "0",
    textAlign: "center",
  },
  slider: {
    height: "350px",
    width: "fit-content",
  },

  "@media only screen and (min-width: 900px)": {
    dialog: {
      width: "600px",
    },
    dialogPaper: {
      height: "fit-content",
    },
  },
  "@media only screen and (max-width: 900px)": {
    dialog: {
      maxWidth: "500px ",
    },
    dialogPaper: {
      height: "fit-content",
    },
  },
  dialogTitle: {
    color: "rgba(29, 60, 122, 1)",
  },
  newsPagination: {
    "& ul": {
      gap: "10px",
    },
  },
  
}));
