import './App.css';
import React,{useState,useMemo,useRef} from 'react';
import{Route} from 'react-router-dom';
import PrototypeHome from './PrototypeHome';
import PrototypeAbout from './PrototypeAbout';
import PrototypeNav from './PrototypeNav';
function PrototypeProject(){
   return(
        <div>
            <PrototypeNav />
            <Route path="/home"><PrototypeHome/></Route>
            <Route path="/about"><PrototypeAbout /></Route>
           
        </div>
   );
    
} 
export default PrototypeProject;