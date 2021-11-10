import './App.css';
import FormData from './FormData';
import { useState } from "react";

function Form() {
   var [name, setName] = useState("");
   var [number, setNumber] = useState("");
   var [email, setEmail] = useState("");
   var [intrest, setintrest] = useState("");
   var [tnc, settnc] = useState("");
   var [sub, setsub] = useState(false);
   function getData(e) {
      e.preventDefault();
      
      setsub(true);
      console.log(name, number, email, intrest, tnc);

   }

   function Debug() {
      return (
         <h2 class="App">This is Debugging Process</h2>
      );
   }

   return (
      <div class="App">
         {
            sub ?
               <FormData name={name} email={email} intrest={intrest} />
               : null
         }
         <h2>Form Submission in React</h2>
         <form onSubmit={getData}>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input><br /><br />
            <input type="number" placeholder="Number" onChange={(e) => setNumber(e.target.value)}></input><br /><br />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input><br /><br />
            <select onChange={(e) => setintrest(e.target.value)}>
               <option>Select Option</option>
               <option>Angular</option>
               <option>React</option>
            </select> <br /><br />
            <input type="checkbox" onChange={(e) => settnc(e.target.checked)}></input><span>Accept and condition</span>
            <button type="submit">Submit Data</button>
         </form>
         <button onClick={Debug}>debug Data</button>
      </div>
   );
}
export default Form;