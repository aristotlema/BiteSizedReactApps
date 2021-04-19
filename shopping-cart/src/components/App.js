import React from 'react';
import './App.scss';
import NavBar from './NavBar';
import ItemList from './ItemList';
import Cart from './Cart';

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemList />
            <Cart />
        </div>
    );
};

export default App;