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
        const search = async () => {
            const { data } = await cocktailDB.get('/search.php', {
                params: {
                    s: 'mar'
                }
            });
            console.log(data.drinks);
            setCocktailResults(data.drinks);
        };

        search();
    }, []);
    

    

    return (
        <div>
            <NavBar />
            <main className="main-content">
                <SearchBar />
                <DrinkList cocktailResults={cocktailResults} />
            </main>
        </div>
    );
};

export default App;