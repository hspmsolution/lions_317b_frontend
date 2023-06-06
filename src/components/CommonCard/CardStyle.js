import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  activityImage: {
    borderRadius: "1rem 1rem 0 0",
    "@media screen and (max-width: 600px)": {
      height: "250px",
    },
    width: "100%",
    height: "300px",
  },

  activityDate: {
    position: "absolute",
    top: "6%",
    right: "4%",
    backgroundColor: "white",
    padding: "0.2rem 0.6rem",
    borderRadius: "1rem",
    color: "red",
    margin: "0",
  },
  description: {
    lineHeight: "1.3",
    padding: "0 1rem",
    height: "60px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    whiteSpace: "normal",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
}));
