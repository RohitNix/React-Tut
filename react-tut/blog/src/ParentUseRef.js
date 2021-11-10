import './App.css';
import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import ChildUseRef from './ChildUseRef';

function ParentUseRef() {
    var upchildinpt = useRef(null);
    function updatevalue(){
        upchildinpt.current.value="hi this ref is forwarded";
        upchildinpt.current.focus();
    }
    return (
       
        <div class="container text-center">
            
            <h3>In this we are sending useref  component to another via props and forward ref</h3>
            <ChildUseRef ref={upchildinpt} />
            <Button class="Btn Btn-Success" onClick={updatevalue} > Click for send ref via prop</Button>
        </div>
    );

}
export default ParentUseRef;