import {React, useEffect} from "react";
import style from "../static/css/style.css"
import motor from "../static/scripts/motor.js"
import ThorHeader from "./ThorHeader"
import ThorFooter from "./ThorFooter"


const Thor = () => {
    useEffect(() => {
        document.title = 'Thor GYM | home';
        }, []);
    return (
        <div className="bg-dark">
            <ThorHeader/>
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
                            <img className="col-12 align-self-center" src="img/arnold.png" alt="" />
                        </div>
                    </div>
                </div>
            </main>
            <ThorFooter/>

        </div>
    )
}

export default Thor;