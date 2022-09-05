import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
              <h1>Skionetizy Team Members</h1>
            <ul>
                <Link to='/'>All Members</Link>
                <Link to='/manage'>Manage Members</Link>
            </ul>
        </div>
    );
};

export default Navbar;