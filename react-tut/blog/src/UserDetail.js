import './App.css';
import { withRouter } from 'react-router';

function UserDetail(id){
    console.log(id);
    return(
   <div class="container text-center">
       <h3>User Id :{id.match.params.id} </h3>
   </div>
    );
}
export default withRouter(UserDetail);
