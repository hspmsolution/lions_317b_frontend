import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  newsTitle: {
    textAlign: "center",
  },
  dateChip: {
    position: "relative",
    transform: "translateX(-50%)",
    left: "50%",
  },
  //   activityImage: {
  //     width: "100%",
  //     height: "200px !important",
  //     objectFit: "cover",
  //     position: "absolute",
  //   },
  newsPagination: {
    "& ul": {
      gap: "10px",
    },
  },

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
    top: "2%",
    right: "3%",
    backgroundColor: "white",
    padding: "0.2rem 0.6rem",
    borderRadius: "1rem",
    color: "red",
    margin: "0",
    fontSize: "0.8rem",
    fontWeight: "bold",
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
    transition: "height 0.4s ease-in-",
  },
  descriptionExpand: {
    height: "fit-content",
    padding: "0 1rem",
    textAlign: "justify",
    //////////////
    // position: "absolute",
    // backgroundColor: "rgba(29, 60, 122, 0.9)",
    // zIndex:'9999',
    // borderRadius:'1rem',
    // marginTop:'2rem'

  },
}));
