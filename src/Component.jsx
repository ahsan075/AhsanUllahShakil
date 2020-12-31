import React from "react";
import Menu from "./Menu";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education"
import { Route, Switch } from "react-router-dom";

const Component = () => {

    return (
        <>
            <div className="col-md-8 col-9 wow">
                <section className=" mt-4">
                    <div className="row">
                        <div className="col-3">
                            <Menu />
                        </div>
                        <div className="col-md-9">
                            <Switch>
                                <Route path="/education" component={Education} />
                                <Route path="/skills" component={Skills} />
                                <Route path="/projects" component={Projects} />
                                <Route path="/contact" component={Contact} />
                            </Switch>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}
export default Component;