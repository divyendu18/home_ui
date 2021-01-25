import "./global.css";
import { CssBaseline } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardWrapper from "./components/CardWrapper";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#000",
    },
    secondary: {
      main: "#21bf73",
    },
    black: {
      light: "#3f3f44",
      main: "#3f3f44",
      dark: "#ffffff",
    },
    gray: {
      main: "#dddddd",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1800px",
    margin: "auto",
    height: "auto",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className={classes.container}
          style={{
            background: theme.palette.primary,
          }}
        >
          <Navbar />
        </div>
        <Hero />
        <div
          className={classes.container}
          style={{
            background: theme.palette.primary,
          }}
        >
          <CardWrapper />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
