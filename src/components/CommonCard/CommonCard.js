import React from "react";
import { Box } from "@mui/material";
import useStyles from "./Style";
import LinkIcon from "@mui/icons-material/Link";

export default function CommonCard(props) {
  const classes = useStyles();

  console.log(props.newsPaperLink);

  return (
    <>
      <Box
        position={"relative"}
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "1rem",
        }}>
        <img
          src={props.image}
          srcSet={props.srcSet}
          alt={props.alt}
          className={classes.activityImage}
        />
        <h3 style={{ textAlign: "center" }}>{props.heading}</h3>
        <p
          className={
            props.type === "activities" ? "" : `${classes.description}`
          }>
          {props.description}
        </p>
        {props.date ? <p className={classes.activityDate}>{props.date}</p> : ""}
        {/*  <p className={classes.activityDate}>{props.date}</p> */}
        {props.type === "news" ? (
          <a
            href={`${props.newsPaperLink}`}
            rel="noreferrer"
            target="_blank"
            style={{ color: "white" }}>
            <LinkIcon />
          </a>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
