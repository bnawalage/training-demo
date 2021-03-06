import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import reportWebVitals from './reportWebVitals';
import WelcomeForm from './pages/WelcomeHome'; 
import Home from './pages/home';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from "react-router-dom";
import Login from './pages/login';
import rootReducer from './reducers';

let store=createStore(rootReducer); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={"/app"}> 
          <Switch>
            <Route path="/logged" component={Home}/>
            <Route path="/" component={Login}/> 
          </Switch> 
        </Router> 
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
