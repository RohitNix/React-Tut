import './App.css'
import {useState} from 'react'
import Props from './Props'

function Users() {
  
    function ale(a,b){
        return (
          alert(a*b)
        );
    }
    var [data,UpdateData]=useState('Rohit');
    function Update(){
        UpdateData('No ! Its Rohit Rao');
    }

    // here the main function or main component throush which component are called //
    return (
      <div className="Users">
         <h1>Hello World !!</h1>
        
         <button className="test_btn" onClick= {ale}>click</button> 
         <button onClick={()=>ale(10,10) }>Second Button</button>
         <div className="test"> hi this is testing!!!</div>
        
        {/* this is example for the state which is used as variables  */}
        <h1>{data}</h1>
        <button onClick={()=>Update()}>Update name</button>

        {/* this is exapmle of the props with the functional component   */}
    
</div>
    );
    
   
  }
  
  export default Users;