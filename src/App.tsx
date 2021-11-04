import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./component/footer/Footer";
import NavBar from "./component/navBar/NavBar";
import ProductsPage from "./component/pages/ProductsPage";
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
          <ProductsPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
