import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  activityCard: {
    width:'450px'
  },
  activeH: {
    color: "white",
    textAlign: "center",
  },
  activityImage: {
    "@media screen and (max-width: 600px)": {
      height: "250px",
    },
    width: "100%",
    height: "300px",
    borderRadius: "1rem 1rem 0 0",
  },
  activityDate: {
    position: "absolute",
    top: "0%",
    right: "4%",
    backgroundColor: "white",
    padding: "0.2rem 0.6rem",
    borderRadius: "1rem",
    color: "red",
  },
}));
