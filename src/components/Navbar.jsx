import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import { AiOutlineShoppingCart } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    height: "4em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2.2em",
  },
  navLogo: {
    "& > h1": {
      color: theme.palette.black,
      fontSize: "1.6em",
    },
  },
  navItems: {
    flex: 1,
    "& > ul": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "2em",
      "& > li": {
        listStyle: "none",
        cursor: "pointer",
        color: theme.palette.black,
        fontSize: "1.1em",
        display: "flex",
        gap: "0.3em",
        "& > span": {
          margin: "auto",
          display: "grid",
          placeContent: "center",
        },
      },
    },
  },
}));

const Navbar = ({ theme }) => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.navLogo}>
        <h1>AMTICA</h1>
      </div>
      <div className={classes.navItems}>
        <ul>
          <li>Login / Sign-up</li>
          <li>
            Cart{" "}
            <span>
              <AiOutlineShoppingCart
                size={20}
                color={theme.palette.secondary.main}
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withTheme(Navbar);
