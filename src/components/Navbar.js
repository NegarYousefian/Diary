import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
        
            <div className="nav-container">
                <ul className="nav-items">
                    <Link to="/"><li className="nav-item"><i className="fa fa-home" aria-hidden="true"></i>Home</li></Link>
                    <Link to="/about"><li className="nav-item"><i className="fa fa-user" aria-hidden="true"></i>About</li></Link>
                    <Link to="/todo"><li className="nav-item"><i className="fa fa-list" aria-hidden="true"></i>Todo</li></Link>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
