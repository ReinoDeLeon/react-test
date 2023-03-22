import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from './components/Home';
import Thor from './components/Thor';
import NotFoundScreen from './components/errores/404';
import ThorContacto from './components/ThorContacto';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Switch>
    <Route path="/home" component={Home} />
    <Route exact path="/thor" component={Thor} />
    <Route path="/thor/contacto" component={ThorContacto} />
    <Route exact path="/"> <Redirect to="/home" /></Route> 
    <Route component={NotFoundScreen}/>
  </Switch>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
