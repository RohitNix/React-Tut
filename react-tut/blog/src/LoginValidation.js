import './App.css';
import { useState } from 'react';
function LoginValidation(){

var [validname,setValidname]=useState(false);    
var [validpass,setValidpass]=useState(false);   
// states for the getting the validation for iput//
   var [user,setuser]= useState("");
   

function checkvalid(){
    if(user.length<3){
        alert("please enter the value length more then 3");
    }
}



function userHandler(e){
    var name = e.target.value;
    if(name.length<3){
          setValidname(true);
    }else{
          setValidname(false);
    } 
   setuser(name);  
}    

// function passHandler(e){
//     var name = e.target.value;
//     if(name.length<3){
//           setValidname(true);
//     }else{
//           setValidname(false);
//     } 

// }   
    return(
       <div class="App">
        <form onSubmit={checkvalid}>
           <h1>Login Validation...</h1>
          <input type="text" placeholder="name" onChange={userHandler} ></input>{validname?<span>Name not valid</span>:""}
          <button type="submit"></button>
        </form>
       </div>

    );
}
export default LoginValidation;