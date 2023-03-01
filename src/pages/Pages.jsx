import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../components/home/Home";
import { Resume } from "../components/page/Resume";
import { SideContent } from "../components/side/SideContent";
import "./page.css";

export const Pages = () => {
  return (
    <>
      <div className="main-div">
        <div className="side">
          <SideContent />
        </div>
        <main>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
          </Router>
        </main>
      </div>
    </>
  );
};
