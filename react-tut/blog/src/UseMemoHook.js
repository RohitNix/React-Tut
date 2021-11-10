import './App.css';
import { Button } from 'react-bootstrap';
import React,{useState , useMemo} from 'react';
function UseMemoHook(){
    var [count, setCount] = useState(0);
    var [countval,setCountval] = useState(10);
    
    


    var Updatecountval = useMemo(function Updatecountvalue(){
        setCountval(countval*10);



    },[countval]);
    


    return(
        <div class="text-center">
             <h2>{count}</h2>
             <h2>{countval}</h2>
            <h3>In this tutorial we are learning abot how to stop the 
                rendreing when data is same and to stop the rendrering 
                for the other function which are not in use.</h3>
         <Button class="btn btn-primary" onClick={()=>setCount(count+1)}>Rerender Count </Button>
          <Button class="btn btn-success ms-2" onClick={Updatecountval}>Rerender CountVal  </Button>
        </div>

    );
}
export default UseMemoHook;