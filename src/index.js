import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WelcomeForm from './pages/WelcomeHome'; 
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Route 
} from "react-router-dom";
import Login from './pages/login';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={"/app"}> 
          <Route path="/logged" component={Home}/>
          <Route path="/" component={Login}/> 
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
