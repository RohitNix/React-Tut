import './App.css';
import React, { useState } from 'react';
 
function ControlledCompo(){
    var [val,setVal]=useState("");
    return(
       <div class="App">
           <h3>it is the example for the Controlled Componet 
               which are Directely controlled through states.
           </h3>
           <input type="text" onChange={(e)=>setVal(e.target.value)}></input>
           <h3>{val}</h3>
       </div>
    );
}
export default ControlledCompo;