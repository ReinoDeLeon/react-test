import React from "react";
import "../App.css";
// importing Link from react-router-dom to navigate to 
// different end points.
import Nav from "./nav";
import style from "../static/css/style.css"

const Home = () => {
    const autor = "Iván Antón";


    return (
        <div className="App">
            <header className="App-header">
                <h2>{autor}</h2>
                <h4>Actualmente en desarrollo</h4>
                <Nav />
            </header>
        </div>
    );
};

export default Home;