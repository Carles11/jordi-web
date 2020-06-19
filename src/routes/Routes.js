import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../index.css";
const Navigation = lazy(() => import("../components/header/Navigation.js"));
const Footer = lazy(() => import("../components/Footer"));
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));
const Projects = lazy(() => import("../views/Projects"));
const Contact = lazy(() => import("../views/Contact"));
const VideoCall = lazy(() => import("../views/VideoCall"));

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
      <Suspense fallback={<h1>Loading…</h1>}>
        <div className="content">
          <Navigation />
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
            <Route path="/video-call">
              <VideoCall />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Suspense>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
