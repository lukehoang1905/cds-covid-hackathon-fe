import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import RequestFormPage from "./pages/RequestFormPage/RequestFormPage";
import HubDetailPage from "./pages/HubDetailPage/HubDetailPage";
import RequestDetailPage from "./pages/RequestDetailPage/RequestDetailPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/request/:id" component={RequestDetailPage} />
        <Route exact path="/request/form" component={RequestFormPage} />
        <Route exact path="/request" component={RequestFormPage} />
        <Route exact path="/hub/:id" component={HubDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
