import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import Apps from '../assets/Apps.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    maxWidth: "1200px",
    width: "90%",
    marginTop:"2em",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    minHeight: "200px",
  },
  footerFirst: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-content",
    gap: "2em",
    "& > div": {
      flex: 1,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",

    },
  },
  icons:{
    width:"100%",
    display:"flex",
    gap:"10px",
    justifyContent:"flex-start",
    padding:"1em 0",
    "& > div":{
        width:"35px",
        height:"35px",
        display:"grid",
        placeContent:"center",
        fontSize:"20px",
        background:theme.palette.secondary.main,
        color:theme.palette.primary.main,
        borderRadius:"5px",
    },
  },
  fifth:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"flex-start",
  },
  footerSecond: {
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em 0",
    "& > div": {
      display: "flex",
      alignItems: "center",
      gap: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.footerFirst}>
        <div className={classes.first}>
          <h1>AMTICA</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolor sequi architecto aliquid esse minima omnis! Modi
            exercitationem rerum.
          </p>
          <div className={classes.icons}>
            <div><AiFillYoutube/></div>
            <div><AiFillFacebook/></div>
            <div><AiOutlineTwitter/></div>
            <div><AiFillInstagram/></div> 
          </div>
        </div>
        <div className={classes.second}>
          <h3>Sitemap</h3>
          <p>Home</p>
          <p>Seller</p>
          <p>Buyer</p>
          <p>Search</p>
        </div>
        <div className={classes.third}>
          <h3>Services</h3>
          <p>Help</p>
          <p>Request a Feature</p>
          <p>Terms and Policy</p>
        </div>
        <div className={classes.fourth}>
          <h3>For Users</h3>
          <p>Login</p>
          <p>Register</p>
          <p>My Orders</p>
        </div>
        <div className={classes.fifth}>
          <h3>Our App</h3>
          <img src={Apps} alt="" width="120px"/>
        </div>
      </div>
      <div className={classes.footerSecond}>
        <h3>&copy; Amtica. All rights reserved.</h3>
        <div>
          <p>Privacy & Cookies</p>
          <p>Accessibility</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
