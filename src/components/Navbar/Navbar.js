import React from 'react';
import {topnav} from './Navbar.module.css'
import { Link } from "gatsby"
const Navbar = () => {
    return (
            <div className={topnav}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/contact">Contact</Link>
                <p style={{textAlign:"right", marginRight:"5px"}}>Youssef Jouhar</p>
            </div>
    )
}
export default Navbar;