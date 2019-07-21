import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "./actions/fetchActions";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BusinessListings from "./components/BusinessListings";
import BusinessDetails from "./components/BusinessDetails";

import "./App.css";

function App(props) {
  const useFetching = () => {
    useEffect(() => {
      props.fetchRestaurants();
    }, []);
  };

  useFetching();

  return (
    <main>
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />

          <Switch>
            <Route exact path="/" component={BusinessListings} />
            <Route exact path="/:businessName" component={BusinessDetails} />
          </Switch>
        </div>
      </Router>
    </main>
  );
}

export default connect(
  null,
  { fetchRestaurants }
)(App);
