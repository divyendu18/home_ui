import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import { BiSearch } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  heroWrapper: {
    Width: "100%",
    height: "auto",
    minHeight: "80vh",
    display: "grid",
    placeContent: "center",
    background: `url("https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=695&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  hero: {
    width: "100%",
    margin: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heroText: {
    "& > h1": {
      textAlign: "center",
      fontSize: "clamp(3em,10vw,5em)",
      color: theme.palette.primary.main,
      lineHeight: "1.2",
    },
  },
  searchBox: {
    width: "80%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    background: theme.palette.primary.main,
    margin: "1.3em 0",
    borderRadius: "5px",
    "& > input": {
      width: "100%",
      height: "100%",
      background: theme.palette.primary.main,
      outline: "none",
      border: "none",
      padding: "1.4em",
      borderRadius: "5px",
    },
    "& > span": {
      padding: "0 1em",
      display: "grid",
      placeContent: "center",
    },
  },
}));

const Hero = ({ theme }) => {
  const classes = useStyles();
  return (
    <div className={classes.heroWrapper}>
      <div className={classes.hero}>
        <div className={classes.heroText}>
          <h1>
            Find Great Deals Customized
            <br />
            For Your Need
          </h1>
        </div>
        <div className={classes.searchBox}>
          <input
            type="text"
            placeholder="Search service or product"
            autoComplete="off"
          />
          <span>
            <BiSearch size={34} color={theme.palette.secondary.main} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default withTheme(Hero);
