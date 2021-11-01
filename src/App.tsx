import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Footer from "./component/footer/Footer";
import NavBar from "./component/navBar/NavBar";
import Page from "./component/pages/Page";
import LandingPage from "./component/landingPage/LandingPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/products">
          <Page />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
