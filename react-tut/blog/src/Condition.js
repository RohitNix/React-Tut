import './App.css';
import { useState } from "react";

function Condition() {
    var [loggedin, setCondition] = useState(true);
    // This is Basic way but not recommended //

    /*  if(loggedin){
            return(
                <h2>Welcome:Rohit</h2>
            );
        }else{
            return(
                <h2>Welcome:Guest</h2>
            );
        }*/
    return (
        <div>
            {loggedin ? <h1>Welcome Rohit</h1> : <h1>Welcome Guest</h1>}
        </div>
    )
}
export default Condition;
