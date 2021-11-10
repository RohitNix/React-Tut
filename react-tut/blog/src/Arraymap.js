import './App.css';
function Arraymap(){
    var students = ['Rohit','Ankit','Abhishek','Random'];
    var studentdata = [
              {name:"Rohit",email:"dhonirohit81@gmaiil.com",contact:9812481861},
              {name:"Rohit",email:"rohit121@gmail.com",contact:9812481861},
              

    ]
    // // Here we use the map looping //
    // students.map((item)=>{
    //     console.log(item);

    // });
    
    // // here we are using loop //
    // for(var i=0;i<students.length;i++){
    //     console.log(students[i]);
    
    return(
         <div class= "App">
             <h2>This is testing for the map loop </h2>
             <table>
    
                { 
                    studentdata.map((data,i)=>
                    <tr key={i}>
                       <td>{data.name}</td>
                       <td>{data.email}</td>
                       <td>{data.contact}</td>
                     
                   
                    </tr>
                    )
                    
                }
                </table>
         </div>
    );
}
export default Arraymap;