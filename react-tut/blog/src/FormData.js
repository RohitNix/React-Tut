import './App.css';
function formData(data){
    console.log(data.name);
    return(
       <div class="App">
           <table>
               <tr>
                   <td>Name</td>
                   <td>Number</td>
                   <td>Email</td>
                   <td>Language</td>
               </tr>
               <tr>
                   <td>{data.name}</td>
                   <td>{data.number}</td>
                   <td>{data.email}</td>
                   <td>{data.intrest}</td>
               </tr>

           </table>
       </div>
    );
}
export default formData;
   