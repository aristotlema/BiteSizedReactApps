import React from 'react';
import './SearchBar.scss';

const SeachBar = () => {
    return (
        <div className="search-bar">
            <form>
                <input className="search-bar-input" type="text" />
            </form>
        </div>
    );

};

export default SeachBar;