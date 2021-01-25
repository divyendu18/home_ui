import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "1200px",
    width: "90%",
    minHeight: "400px",
    height: "auto",
    borderRadius: "12px",
    // background: theme.palette.secondary.main,
    background: `url("https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    margin: "2em auto",
    padding: "2em",
    position: "relative",
  },
}));

function Card({ children }) {
  const classes = useStyles();
  return <div className={classes.card}>{children}</div>;
}

export default Card;
