import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import App from './App';
import ClassUser from './App';
import Users from './Users';
import SignUp from './SignUp';
import ProsModule from './ProsModule';
import Toggle from './Toggle';
import Form from './Form';
import formData from './FormData';
import Condition from './Condition';
import LoginValidation from './LoginValidation';
import Parentpromp from './Parentpromp';
import UseeffectHook from './UseeffectHook';
import Arraymap from './Arraymap';
import BootArrMap from './BootArrMap';
import Nestedlist from './Nestedlist';
import DynamicMapList from './DynamicMapList';
import UseMemoHook from './UseMemoHook';
import Userref from './Userref';
import ParentUseRef from './ParentUseRef';
import ControlledCompo from './ControlledCompo';
import Routing from './Routing';
import DynamicRoute from './DynamicRoute';
import GetApi from './GetApi';
import PostApi from './PostApi';
import{BrowserRouter as Router} from 'react-router-dom';
import PrototypeProject from './PrototypeProject';

import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>

   {/* <Users />
    <ClassUser />
   <App />  
   <ProsModule />
   <Toggle />

   <Form />

   <Condition />
   <LoginValidation />
   <Parentpromp />
   <UseeffectHook />
   <Arraymap />*/}
   {/* <Parentpromp />
   <BootArrMap />
   <Nestedlist />
   <DynamicMapList />
  <UseMemoHook />  */}
  {/* <Userref />

   <ParentUseRef />
   <ControlledCompo /> 
  <Routing />*/}
  <Router><PrototypeProject /></Router>
  <DynamicRoute />
   <GetApi />
  <PostApi />
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
