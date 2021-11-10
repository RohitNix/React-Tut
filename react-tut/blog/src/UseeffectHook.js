import './App.css';
import React,{ useEffect,useState } from 'react';
import Useeffectprops from './Useeffectprops';
import {button} from 'react-bootstrap';
function UseeffectHook(){
    var [count,setCount]=useState(0);
    var [data,SetdataCount]=useState(100);
    var [Prom_1,setprom_1]=useState(200);
    var [Prom_2,setprom_2]=useState(300);
    useEffect(()=>{
      console.log("Use effect working for count");
    },[count]);
    useEffect(()=>{
        console.log("Use effect working for data count")
    },[data])

    return(
      <div class="App">
          <h2>Use effect in React{count}</h2>
          
          <button onClick={()=>setCount(count+1)}>Update Count</button>
          <button onClick={()=>SetdataCount(data+1)}>Update data</button>
          <Useeffectprops prom_1={Prom_1} prom_2={Prom_2}/>
          <button onClick={()=>setprom_1(Prom_1+1)}>Update Prom_1</button>
          <button onClick={()=>setprom_2(Prom_2+1)}>Update Prom_2</button>
          <button class="btn btn-primary" onClick={()=>alert("Hello")}>Click ootstrap</button>
          
      </div>
    );
}
export default UseeffectHook;