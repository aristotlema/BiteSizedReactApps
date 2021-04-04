import React, { useState, useEffect } from 'react';
import './reset.css';
import './App.scss';
import Route from './Route';
import cocktailDB from '../api/cocktailDB';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import DrinkList from './DrinkList';


const App = () => {
    const [cocktailResults, setCocktailResults] = useState([]);
    const [selectedCocktail, setSelectedCocktail] = useState([]);

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
                <Route path="/">
                    <SearchBar onFormSubmit={search}/>
                    <DrinkList cocktailResults={cocktailResults} />
                </Route>
                <Route path="/about">
                    <h1>About page</h1>
                </Route>
                <Route path="/details">
                    <h1>Drink details</h1>
                </Route>
            </main>    
        </div>
    );
};

export default App;