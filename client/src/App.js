// import logo from './logo.svg';
import "./App.css";
//import List from './components/List';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Detailroom from "./pages/Detailroom";
import Payment from "./pages/Payment";
import Reservation from "./pages/Myreservation";
import Income from "./pages/Income";
import Mypending from "./pages/Mypaypending";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/pages/room" component={Room} />
            <Route path="/pages/reservation" component={Reservation} />
            <Route path="/pages/mypending" component={Mypending} />
            <Route path="/pages/detailroom/:idRoom" component={Detailroom} />
            <Route path="/pages/payment/:idOrder" component={Payment} />
            <Route path="/pages/report/income" component={Income} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
