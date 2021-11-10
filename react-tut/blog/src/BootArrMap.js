import './App.css';
import{Table} from 'react-bootstrap';
function BootArrMap(){
 
    var data=[
        {name:"Rohit Rao",email:"dhonirohit81@gmail.com",contact:9812481761},
        {name:"Ankit Rawat",email:"rawatankit76@gmail.com",contact:8765651144},
        {name:"Akash Verma",email:"veramaakash46@gmail.com",contact:5573432121},
    ]
return(
<div class="App">
    <Table striped>
    <thead striped>
    <tr>
     
      <th>Name</th>
      <th>Email</th>
      <th>Contact</th>
    </tr>
  </thead>
  <tbody>
        {
        data.map((val)=>
        <tr>
           <td>{val.name}</td>
           <td>{val.email}</td>
           <td>{val.contact}</td>

        </tr>
        )
}
</tbody>
    </Table>
</div>
);
}
export default BootArrMap;