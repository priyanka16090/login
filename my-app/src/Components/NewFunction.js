import React from "react";

function Employee(){
    return <h1>Hi Diatoz</h1>
}
function Diatoz(){
    return <h2>100 Employees</h2>
}
function E2eHiring(){
    return(
        <>
        <h1>am e2eHiring Employee</h1>
        <Diatoz/>
        </>
    )
}
export default Employee;
export {Diatoz,E2eHiring};