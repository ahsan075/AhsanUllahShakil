import React from "react";

const Education = () => {

    const Click = () => {
        document.querySelector("#ok").classList.toggle("show")
        document.querySelector("#ok2").classList.add("show")
        document.querySelector("#ok3").classList.add("show")
    }
    const Click2 = () => {
        document.querySelector("#ok2").classList.toggle("show")
        document.querySelector("#ok").classList.add("show")
        document.querySelector("#ok3").classList.add("show")
    }
    const Click3 = () => {
        document.querySelector("#ok3").classList.toggle("show")
        document.querySelector("#ok").classList.add("show")
        document.querySelector("#ok2").classList.add("show")
    }

    return (
        <>
            <h2 onClick={Click} className="btn heading w-100 bg-primary mt-4">BSc (Engg.)</h2>
        <div id="ok" className="text-center show">
            <p className="lead"><strong>Electrical and Electronic Engineering</strong></p>
            <p>Bangladesh Army University of Science and Technology <strong>(BAUST)</strong></p>
            <p>CGPA-3.53</p>
            <p>Passing Year : 2019</p>
        </div>
        <h2 onClick={Click2} className="btn heading w-100 bg-primary">HSC</h2>
        <div id="ok2" className="text-center show">
            <p className="lead"><strong>Government Science College,Dhaka</strong></p>
            <p>GPA-4.80</p>
            <p>Passing Year : 2014</p>
        </div>
        <h2 onClick={Click3} className="btn heading w-100 bg-primary">SSC</h2>
        <div id="ok3" className="text-center show">
            <p className="lead"><strong>Jatrabari Ideal High School and College</strong></p>
            <p>GPA-5</p>
            <p>Passing Year : 2012</p>
        </div>
        </>
    )
}
export default Education;