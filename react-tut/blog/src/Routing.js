import './App.css';
import React, { useState, userRef } from 'react';
import { } from 'react-bootstrap';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
function Routing() {
    return (
        <div>
            <Router>
                <Link to="/home">Home</Link>
                <Link to="/about">About Us</Link>
                 <Route path="/home"><Home /></Route>
                 <Route path="/about"><About /></Route>
                
               
            </Router>

        </div>
    );

}

function Home() {
    return (
        <div class="container text-center">
            <h2>Hi ! this is home page after routing</h2>
        </div>
    );
}

function About() {
    return (
        <div class="container text-center">
            <h2>Hi ! this is About Page</h2>
        </div>
    );
}
export default Routing;