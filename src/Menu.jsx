import React from "react";
import {NavLink} from "react-router-dom";

const Menu=()=>{
    return(
        <>
        <div className="menu">
        <NavLink className="btn btn-success btn3" exact activeClassName="btn4" to="/education">Education</NavLink>
        <NavLink className="btn btn-success btn3" exact activeClassName="btn4" to="/skills">Skills</NavLink>
        <NavLink className="btn btn-success btn3" exact activeClassName="btn4" to="/projects">Projects</NavLink>
        <NavLink className="btn btn-success btn3" exact activeClassName="btn4" to="/contact">Contact</NavLink>
        </div>
        </>
    )
}
export default Menu;