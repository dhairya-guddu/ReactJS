import React from 'react';

const Navbar = () =>{
    return(
        <div>
            <nav className='container'>
                <div className='logo'>
                    <img src = 'Nike.png' alt = "logo" widht = "50" height = "40"></img>
                </div>

                <ul className='Navbar'>
                    <li href = "#">Menu</li>
                    <li href = "#">Location</li>
                    <li href = "#">About</li>
                    <li href = "#">Contact</li>
                </ul>               

                <button>Login</button>            
            </nav>
        </div>

    )
}
export default Navbar;