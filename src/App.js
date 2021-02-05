import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Container } from "./components/Container/Container";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Head from "./components/Head/Head";
import Nav from "./components/Nav/Nav"


function App() {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsedChange = (nextChecked) => {
    console.log("COLLAPSED: ", collapsed);
    console.log("NEXT: ", nextChecked);
    setCollapsed(nextChecked);
  };

  return (
    <Router>
      <Container>
        <Nav className="app"
          collapsed={collapsed}
          handleCollapsedChange={handleCollapsedChange}
        />
        <main className="mainOverrides app">
          <Head />
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </Container>
    </Router>
  );
}

export default App;
