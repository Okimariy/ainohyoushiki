import React from "react";
import Together from "./component/Together";
import Confirmation from "./component/Together";
// import { RecoilRoot } from "recoil";
import { BrowserRouter as Router,  Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {HeaderTitle,HeaderLink} from './component/StylePage';

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
        <AppBar position="static" style={{ background: "#ff5757" }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <HeaderTitle href="#">愛の標識</HeaderTitle>
              {/* <Link to="/">愛の標識</Link> */}
            </Typography>
            <HeaderLink to="/Together">はじめる</HeaderLink>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home} />
          <Route path="/Together" component={Together} />
          <Route path="/Confirmation" component={Confirmation} />
      </Router>
    </div>
  );
};

export default App;
