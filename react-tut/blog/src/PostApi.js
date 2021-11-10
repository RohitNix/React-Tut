import './App.css';
import React, { useEffect, useState } from 'react';
import GetApi from './GetApi';


function PostApi(props) {
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [phone, setNumber] = useState("");

    function saveUser() {
        console.log(name, email, phone);
        var data = { name, email, phone }

        fetch("http://localhost:4000/todo", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
               
            })

        })
    }

    
    return (
        <div class="App">
            {props.data}
            <input type="text" value={name} placeholder="Name" onChange={(e) => { setName(e.target.value) }} /><br /> <br />
            <input type="Email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} /><br /> <br />
            <input type="number" value={phone} placeholder="Phone" onChange={(e) => { setNumber(e.target.value) }} /><br /> <br />
            <button onClick={saveUser}>Submit</button>
        </div>
    );
}
export default PostApi;