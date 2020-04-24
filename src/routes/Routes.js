import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../index.css";
const Navigation = lazy(() => import("../components/header/Navigation.js"));
const Footer = lazy(() => import("../components/Footer"));
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));
const Projects = lazy(() => import("../views/Projects"));
const Contact = lazy(() => import("../views/Contact"));

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <Navigation />
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}{" "}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
