import './App.css';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import PostApi from './PostApi';

function GetApi() {
    var [data, setData] = useState([]);
    // states for the setting the data in input field //
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [mobile, setMobile] = useState("");
    var [userId, setId] = useState("");

    useEffect(() => {
        // fetch("http://localhost:4000/todo").then((result) => {
        //     result.json().then((resp) => {
        //         // console.log(resp);
        //         setData(resp);
        //     })
        // });
        getList();

    }, []);

    function getList() {
        fetch("http://localhost:4000/todo").then((result) => {
            result.json().then((resp) => {
                //console.log(resp[]);
                setData(resp);
                // console.log(resp[4]);
            })
        });

    }

    // function  for updating the data // 

    <PostApi data={getList} />

    function deleteUser(id) {
        // fetch("http://localhost:4000/todo"+id)
        fetch(`http://localhost:4000/todo/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                // console.log(resp[4]);
                getList();
            })
        })
    }

    /// console.log(data[2].name);
    function selectUser(id) {
        console.log(id);
        //console.log(data.id);
        var item = data[id - 1];
        setName(item.name);
        setEmail(item.email);
        setMobile(item.mobile);
        setId(item.id);


    }
    // function  for updating the data //
 
    function updateUser(){

    var items = { name, email, mobile, userId }
    fetch(`http://localhost:4000/todo/${userId}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(items)
    }).then((result) => {
        result.json().then((resp) => {
            getList();
        })
    })

    }
    return (
        <div class="App">
            <h2>Get Data From API CALL (Json Server)</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, i) =>
                            <tr key={i}>
                                <td>{value.userId}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.mobile}</td>
                                <td><Button variant="danger" size="sm" onClick={() => deleteUser(value.id)}>Delete</Button></td>
                                <td><Button variant="success" size="sm" onClick={() => selectUser(value.id)}>Update</Button></td>

                            </tr>


                        )
                    }


                </tbody>
            </Table>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} /><br /><br />
            <Button variant="success" onClick={updateUser}>Update Data</Button>

        </div>

    );
}
export default GetApi;

