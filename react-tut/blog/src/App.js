
import './App.css';
import React,{Component} from 'react';
import TestComponent from './TestComponent';
import Props from './Props';



function App() {
  // this is example of calling component into component //
function Apple(){
  return (
      <div class="App">
        <p>This is Apple component</p>
      </div>
  );
}

  return (
    <div class="App">
       <h1>Hello World !!</h1>
       <h5>This is my first code in react</h5>
       {/* <Apple />
       <ClassUser /> */}
       <TestComponent />
       
    </div> 
  );
}

// This is making of the component using class //

class ClassUser extends Component
{
    render(){
        return(
            <h2>Hello from the class component..</h2>
        )
    }
} 



export default App;
 