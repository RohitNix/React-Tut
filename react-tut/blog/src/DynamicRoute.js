
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link,Route } from 'react-router-dom';
import UserDetail from './UserDetail';

function DynamicRoute() {
    var users = [
        { id: 1, name: "Rohit", email: "dhonirohit81@gmail.com" },
        { id: 2, name: "Ankit", email: "rawatankit445@gmail.com" },
        { id: 3, name: "Abhishek", email: "yadavAbhishek81@gmail.com" },
        { id: 4, name: "Dhoni", email: "mahi07@gmail.com" },
        { id: 5, name: "Virat", email: "kholi18@gmail.com" },

    ]

    return (
        <div class="App">
            <Router>
                <h3>React Dynamic Data</h3>
                {
                    users.map((val) =>
                        <h3><Link to={"/UserDetail/"+val.id}>{val.name}</Link></h3>
                       
                    )

                }
                <Route path="/UserDetail/:name" ><UserDetail /></Route>
            </Router>
        </div>


    );

}

export default DynamicRoute;