import React from 'react';
import styles from './Navbar.module.css';


const Navbar = () => {
    return(
        <nav className= {`${styles.navbar} container` }>
            <div className='logo'>
                <img src = 'nav-icon.png' alt = "nav-logo"></img>
            </div>

            <ul className='Nav-items'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;