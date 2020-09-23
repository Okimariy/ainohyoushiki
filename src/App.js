import React from "react";
import Together from "./component/Together";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = () => {
  return (
    <div>
      <div className="App">
        <p>愛の標識</p>
        <Link to="/Together">はじめる</Link>
      </div>
    </div>
  );
};

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static" style={{ background: "pink" }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="">愛の標識</Link>
            </Typography>
            <Link to="/Together">はじめる</Link>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home} />
        <Route path="/Together" component={Together} />
      </Router>
    </div>
  );
};

export default App;
