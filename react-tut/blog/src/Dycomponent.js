import './App.css';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
function Dycomponent(props) {

    return (
<>
            <tr>
                <td>{props.data.Name}</td>
                <td>{props.data.Email}</td>
                <td>{props.data.Phone}</td>
            </tr>
</>
    );
}
export default Dycomponent;