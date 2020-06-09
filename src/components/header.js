import React, { useState } from "react";
import { connect } from "react-redux";
import TabOne from "../views/tabOne";
import TabTwo from "../views/tabTwo";
import "../css/header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Header = (props) => {

    const [tabOneClass, setTabOneClass] = useState("tab activeTab");
    const [tabTwoClass, setTabTwoClass] = useState("tab");

    const toggleTabs = (flag) =>{
        if(!flag){
            setTabOneClass("tab activeTab");
            setTabTwoClass("tab");
        }else{
            setTabOneClass("tab");
            setTabTwoClass("tab activeTab");
        }
    }

    return (
    <Router>
      <header className={"headerBar"}>  
        <div className="tabs">
            <Link to="/" onClick={()=>toggleTabs(0)} className={tabOneClass}>Images Without Data</Link>
            <Link to="/tabtwo" onClick={()=>toggleTabs(1)} className={tabTwoClass}>Images With Data</Link>
        </div>
      </header>
      <div className="container bodyWrapper">
        <Switch>
          <Route exact path="/">
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
