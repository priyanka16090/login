import { useState } from "react";

function CompHook(){
    const [count,setState]=useState(0)
    return(
        <div>
            <button onClick={()=>setState(count+1)}>Click {count}</button>
        </div>
    )
}
export default CompHook;