import React from "react";
import style from "../static/css/style.css"
import motor from "../static/scripts/motor.js"

import { NavLink } from "react-router-dom";

const Thor = () => {
    return (
        <div className="bg-dark">
    <header className="col-sm-12 bottom-separator bg-dark">
        
        <div className="container">
            <div className="row py-3">
                <div className="col-sm-12 col-md-4 text-center">
                    <a href="index.html"><img className="img-fluid text-white" src="img/logo.jpg" alt=""/></a>
                </div>
                <div className=" col-sm-12 col-md-8 text-end fs-5 align-self-center">
                    <nav className="navbar navbar-expand-lg navbar-light titulo ">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                  </svg>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ps-5">
                                        <NavLink to="/" className="text-white">Home</NavLink>
                                    </li>
                                    <li className="nav-item ps-5">
                                        <a className="nav-link text-white" aria-current="page" href="#">Conócenos</a>
                                    </li>
                                    <li className="nav-item ps-5">
                                        <a className="nav-link text-white" aria-current="page" href="#">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    </header>
    <main>
        <div className="bottom-separator background-general">
            <article id="quote" className="container ">
                <div className="row align-items-center align-content-end">
                    <div className="col-12 bg-dark bg-opacity-75">
                        <p id="cita-top" className="ps-md-5 col-12 text-center">"Trabajo duro y entrenar, no hay una fórmula secreta. Entreno pesado, trabajo duro y apunto a ser el mejor"</p>
                    <p className="col-12 text-center">~ Ronnie Coleman ~</p>
                    </div>
                </div>
            </article>
        </div>
        <div className="container pt-5 my-sm-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-white">
                    <div className="row">
                        <h1 className="col-12 text-center text-main titulo">Thor Gym
                        </h1>
                        <p className="col-12 mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima culpa esse
                            odio beatae cupiditate? Expedita nobis molestias at voluptatem voluptate, voluptatum
                            recusandae sint laboriosam explicabo dolorum quam ducimus aliquid aliquam?</p>
                        <p className="col-12 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestias
                            voluptatibus quam, rem labore dicta autem esse quo totam natus, corporis officia facilis
                            atque, laudantium nobis vel ab assumenda quas! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Doloribus quisquam, in, aperiam eos sunt nihil eveniet velit laudantium
                            adipisci vel explicabo sint labore qui beatae quia perferendis rerum ratione consectetur.
                        </p>
                        <p className="col-12 mt-3 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis
                            accusantium qui voluptate ex quidem ratione temporibus et dolor reprehenderit molestias,
                            error autem repellat corrupti, quam totam inventore incidunt tenetur. Lorem ipsum, dolor sit
                            amet consectetur adipisicing elit. Libero odio minus aliquam nihil, illo, optio aliquid amet
                            fugit, dicta repellat natus iste. Minus odio tenetur placeat, cupiditate aperiam quasi id?
                        </p>
                        <div className="col-6"><a href="" className="btn btn-info text-center d-block">Contacta con nosotros</a></div>
                        <div className="col-6"><a href="" className="btn btn-info text-center d-block">Más información</a></div>
                    </div>
                </div>
                <div className="row arnold align-items-center ps-5 col-12 mt-2 mt-md-0 col-md-6">
                    <img className="col-12 align-self-center" src="img/arnold.png" alt=""/>
                </div>
            </div>
        </div>
    </main>
    <footer className="container background-banner pb-5">
        <h2 className="mt-5 text-main text-center titulo">Valores</h2>
        <div className="row mt-5 text-center">
            <div className="col-12 col-md-4">
                <h3 className="text-main titulo">Sacrificio</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magnam corrupti ipsum enim omnis modi
                    mollitia reprehenderit placeat repellat porro quo voluptate dicta cumque impedit, eius vel natus
                    nisi sed!</p>
            </div>
            <div className="col-12 col-md-4">
                <h3 className="text-main titulo">Disciplina</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magnam corrupti ipsum enim omnis modi
                    mollitia reprehenderit placeat repellat porro quo voluptate dicta cumque impedit, eius vel natus
                    nisi sed!</p>
            </div>
            <div className="col-12 col-md-4">
                <h3 className="text-main titulo">Voluntad</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magnam corrupti ipsum enim omnis modi
                    mollitia reprehenderit placeat repellat porro quo voluptate dicta cumque impedit, eius vel natus
                    nisi sed!</p>
            </div>
        </div>
    </footer>

</div>
    )
}

export default Thor;