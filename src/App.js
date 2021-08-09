import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import RequestFormPage from "./pages/RequestFormPage/RequestFormPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/request/form" component={RequestFormPage} />
      </Switch>
    </Router>
  );
}

export default App;
