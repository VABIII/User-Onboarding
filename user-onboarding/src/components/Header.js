import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";


export default function Header() {

    return (
        <div className="header-links">
            <nav>
                <Link id="home" to="/">Home</Link>
            </nav>
            <nav >
                <Link id="form" to="/form">Add User Form</Link>
            </nav>

        </div>
    )
}












































