import './App.css';
import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
function Userref() {
    var inputref = useRef(null);
    function handleinput() {
        console.log("function call");
        inputref.current.value = "hi this is Testing";
        inputref.current.focus();
    }
    var hideref = useRef(null);
    function hide(){
       hideref.current.style.display="none";
    }
    return (
        <div class="container text-center">
            <h4>it is basically the process for targetting the
                paricular element or manuplation of the DOM.
            </h4>
           
                <div class="col-md-3" ref={hideref}>
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" ref={inputref} />
                    <Button class="btn btn-block btn-success mt-2" onClick={handleinput}>Check Button</Button>

            </div>
              <button class = "btn btn-success" onClick={hide}>hide Object</button>
        </div>
    );
}
export default Userref;