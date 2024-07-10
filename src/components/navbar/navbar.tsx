// src/components/Navbar.js
import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a className='active' href="#">Home</a></li>
                <li><a href="#/database">Database</a></li>
                <li><a href="#/dashboard">Statistics</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
