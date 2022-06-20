import React from "react";
// import "./App.css";
import Name,{Job,Str,NewStr} from "./Export2";
// import NewFunc from "./Export2";

function Import() {
    // const newdata="Anupam"
    return (<>
        <ol>
            {/* <ul>{newdata}</ul>  */}
            <ul>{Name}</ul>
            <ul>{Job}</ul>
            <ul>{Str}</ul>
            <ul>{NewStr}</ul>
            {/* <ul>{NewFunc}</ul> */}
        </ol>
    </>)
}

export default Import
export {Job,Str,NewStr};
