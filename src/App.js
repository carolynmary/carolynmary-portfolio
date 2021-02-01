import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Container } from "./components/Container/Container";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";
import Head from "./components/Head/Head";


function App() {

  return (
    <Router>
      <Container>
        <Head />
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
