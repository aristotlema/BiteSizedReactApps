import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return(
        <nav className="nav-bar">
            <h3 className="nav-bar-title">The <span className="title-highlight">Cocktail </span> DB</h3>
            <div className="nav-bar-links">
                <a>Home</a>
                <a>About</a>
            </div>
        </nav>
    );
};

export default NavBar;