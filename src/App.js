import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import RequestFormPage from "./pages/RequestFormPage/RequestFormPage";
import HubDetailPage from "./pages/HubDetailPage";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import GlobalStyles from "./components/GlobalStyles";

import theme from "./theme/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/request/form' component={RequestFormPage} />
          <Route exact path='/hub/:id' component={HubDetailPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
