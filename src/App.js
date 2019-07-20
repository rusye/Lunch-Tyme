import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GOOGLE_API_KEY } from "./config";
import "./App.css";

function App() {
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

export default App;
