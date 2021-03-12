import React from 'react';
import './reset.css';
import './App.css';
import GameBoard from './GameBoard';

class App extends React.Component{
    render() {
        return (
            <div className="app">
                <GameBoard />
            </div>
        );
    }
}
export default App;