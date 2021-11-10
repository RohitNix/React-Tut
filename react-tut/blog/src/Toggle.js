import { useState } from "react";
function Toggle(){
    var [status,setStatus]=useState(true);
    return(
     <div>
         {
             status? <h2>button click</h2>:null
         }
        <button onClick={()=>setStatus(false)}>Hide</button> 
        <button onClick={()=>setStatus(true)}>Show</button>
        <button onClick={()=>setStatus(!status)}>Toggle</button>
     </div>
    );
    
}
export default Toggle;