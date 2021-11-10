import 'App.css';
import React,{useState} from 'react';
 
function PrevState(){
    var [value,setValue] = useState(1);
    

    return(
        <div>
            <h2>{}</h2>
            <button onClick={updateCounter}></button>
        </div>
    );
}