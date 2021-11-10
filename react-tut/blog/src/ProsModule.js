import Props from './Props';
import {useState} from 'react';

function ProsModule() {
  
var [name,setName]=useState("Rohit");
var [email,setEmail]=useState("rohitendless121@gmail.com");
var [print,setInput]=useState(null);
var [data,setinputvalue]=useState(false);
function getData(val){
    console.log(val.target.value)
  setInput(val.target.value)
}
  return(
    <div>
        {
      data?
      <h1>{print}</h1>
      :null 
        }
       <Props name={name} email={email} number="881897863" />
       {/* <Props name="Rohit" email="dhonirohit81@gmail.com" number="9518663896"/> */}
       <button onClick={()=>setName("Rohit Rao")}>updating pros data</button>
       <input type="text" onChange={getData}></input>
    <button onClick={()=>setinputvalue(true)}>Upadte Data</button>
    </div>
  );


}
 



export default ProsModule;
 