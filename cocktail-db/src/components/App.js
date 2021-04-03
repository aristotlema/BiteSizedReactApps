import React, { useState, useEffect } from 'react';
import './reset.css';
import './App.scss';
import cocktailDB from '../api/cocktailDB';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import DrinkList from './DrinkList';


const App = () => {
    const [cocktailResults, setCocktailResults] = useState([]);

    useEffect(() => {
        search('c');
    }, []);

    const search = async (term) => {
        const { data } = await cocktailDB.get('/search.php', {
            params: {
                s: term
            }
        });
        setCocktailResults(data.drinks);
    };

    return (
        <div>
            <NavBar />
            <main className="main-content">
                <SearchBar onFormSubmit={search}/>
                <DrinkList cocktailResults={cocktailResults} />
            </main>
        </div>
    );
};

export default App;