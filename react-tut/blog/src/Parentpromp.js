import Childpromp from "./Childpromp";

function Parentpromp(){
 function Pass(){
     alert("this is testing");
     
 }  
return(
   <div>
      <Childpromp data={Pass}/>
   </div>

);

}
export default Parentpromp;