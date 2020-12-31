import React from "react";
import web from "./image/profile.jpg"
import Menu from "./Menu";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education"
import { Route, Switch } from "react-router-dom";
import Component from "./Component";
const App = () => {


  return (
    <>
      <div>
        <h1 className="head">Ahsan Ullah Shakil</h1>
        <hr />
        <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
        <p className="btn btn2 btn-success d-inline me-2 ms-2">MOTIVATED</p>
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
        <p className="btn btn2 btn-success d-inline me-2 ms-2">FOCUSED</p>
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
        <p className="btn btn2 btn-success d-inline me-2 ms-2">DETERMINED</p>
        <hr className="hr1" />
        <div className="container-fluid col-12">
          <div className="row">
            <div className="col-md-4 col-3 wow d-flex">
              <section className="d-flex six">
                <img className="image1" src={web} />
              </section>
            </div>
            <Component />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;