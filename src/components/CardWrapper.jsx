import React from "react";
import Card from "./Card";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: "100%",
    padding: "2em 0",
  },
  leftContent: {
    position: "absolute",
    top: "50%",
    left: "0",
    padding: "1.3em",
    width: "400px",
    minHeight: "200px",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    gap: "1.3em",
    borderRadius: "5px",
    color: theme.palette.primary.main,
    marginBottom: "2em",
    "& > h2": {
      fontSize: "1.3em",
      letterSpacing: "2px",
    },
    "& > button": {
      width: "150px",
      outline: "none",
      border: "none",
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      padding: "1em 0",
      borderRadius: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  rightContent: {
    paddingTop: "2em",
    position: "absolute",
    bottom: "3em",
    right: "3em",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    color: theme.palette.primary.main,
  },
  bottomContent: {
    position: "absolute",
    background: "rgba(0,0,0,0.4)",
    padding: "1.2em",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    color: theme.palette.primary.main,
    gap: "2em",
    "& > button": {
      marginLeft: "auto",
      width: "150px",
      outline: "none",
      border: "none",
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      padding: "1em 0",
      borderRadius: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  bottomContentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2em",
  },
}));

const CardWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardWrapper}>
      <Card>
        <div className={classes.leftContent}>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            possimus distinctio.
          </p>
          <button>Discover</button>
        </div>
        <div className={classes.rightContent}>
          <h2>Seller Name</h2>
          <p>Westbangal, Kolkata</p>
        </div>
      </Card>
      <Card>
        <div className={classes.bottomContent}>
          <div className={classes.bottomContentWrapper}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              possimus distinctio.
            </p>
          </div>
          <button>Discover</button>
        </div>
      </Card>
    </div>
  );
};

export default CardWrapper;
