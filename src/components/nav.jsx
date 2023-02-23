
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <ul>
                    <li>
                        {/* Endpoint to route to Home component */}
                        <NavLink to="/" className="text-white">Home</NavLink>
                    </li>
                    <li>
                        {/* Endpoint to route to About component */}
                        <NavLink to="/thor" className="text-white">Thor template</NavLink>
                    </li>
                </ul>
    )
}

export default Nav;