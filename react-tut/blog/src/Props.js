function Props(data){
    console.log(data.name);
    return(
       <table width='50%' border='2px'>
           <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Number</th>
           </tr>
           <tr>
               <th>{data.name}</th>
               <th>{data.email}</th>
               <th>{data.number}</th>
           </tr>
           
       </table>
    );
}
export default Props;