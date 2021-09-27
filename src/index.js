import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notification from './Notification';
// import { router } from 'json-server';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import FetchNotificationApi from './component/FetchNotificationApi';
// import TaskMasterApi from './component/TaskMasterApi';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Link to='/notification' style={{textDecoration:'none', color: "orange"}}>NotificationAppComponent</Link>

    <Route path='/' exact component={App} />
    
    <Route path='/notification' component={Notification} ></Route>
    
    {/* <TaskMasterApi /> */}
    {/* <FetchNotificationApi/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
