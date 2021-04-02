import React, { useState, useEffect } from 'react';
import './reset.css';
import './App.scss';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SeachBar from './SearchBar';
import axios from 'axios';
import cocktailDB from '../api/cocktailDB';

const App = () => {

    useEffect(() => {
        const search = async () => {
            const { data } = await cocktailDB.get('/search.php', {
                params: {
                    s: 'mar'
                }
            });
            console.log(data);
        };

        search();
    }, []);
    

    

    return (
        <div>
            <NavBar />
            <main className="main-content">
                <SeachBar />
            </main>
            
        </div>
    );
};

export default App;