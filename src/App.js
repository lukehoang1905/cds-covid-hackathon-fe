import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RequestFormPage from "./pages/RequestFormPage";
import HubDetailPage from "./pages/HubDetailPage";
import RequestDetailPage from "./pages/RequestDetailPage";

import theme from "./theme/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/request" component={RequestFormPage} />
          <Route exact path="/hub/:id" component={HubDetailPage} />
          <Route exact path="/request/:id" component={RequestDetailPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
