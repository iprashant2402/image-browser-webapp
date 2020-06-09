import React, { useState } from "react";
import { connect } from "react-redux";
import TabOne from "../views/tabOne";
import TabTwo from "../views/tabTwo";
import "../css/header.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

const Header = (props) => {
  //State used to dynamically add css classes.
  const [tabOneClass, setTabOneClass] = useState("tab activeTab");
  const [tabTwoClass, setTabTwoClass] = useState("tab");

  //Function which takes a boolean param and based on the flag toggles the activeTab class on the tabs
  const toggleTabs = (flag) => {
    if (!flag) {
      setTabOneClass("tab activeTab");
      setTabTwoClass("tab");
    } else {
      setTabOneClass("tab");
      setTabTwoClass("tab activeTab");
    }
  };

  return (
    <Router>
      <header className={"headerBar"}>
        {/* Render Tabs i.e. Tab 1 & Tab 2 */}
        <div className="tabs">
          <Link to="/" onClick={() => toggleTabs(0)} className={tabOneClass}>
            Images Without Data
          </Link>
          <Link
            to="/tabtwo"
            onClick={() => toggleTabs(1)}
            className={tabTwoClass}
          >
            Images With Data
          </Link>
        </div>
      </header>
      {/* Render main wrapper which will contain the contents of the page. */}
      <div className="container bodyWrapper">
        <Switch>
          {/* Redirect to tabOne when the user initially visits the site. */}
          <Route exact path="/">
            <Redirect to="/tabOne"/>
          </Route>
          <Route path="/tabOne">
            <TabOne />
          </Route>
          <Route path="/tabtwo">
            <TabTwo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
