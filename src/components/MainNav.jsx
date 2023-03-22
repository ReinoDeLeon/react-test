import { NavLink, useLocation } from "react-router-dom";

function MainNav() {

    const location = useLocation();
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item ps-5">
                                                <NavLink to="/home" className="text-white">Home</NavLink>
                                            </li>
                                            <li className="nav-item ps-5">
                                            <NavLink to="/thor/about">
                                                    About
                                                </NavLink>

                                            </li>
                                            <li className="nav-item ps-5">
                                            <NavLink to="/thor/contacto" className="text-white">Contacto</NavLink>
                                            </li>
                                        </ul>
                                    </div>
   )
}

export default MainNav;