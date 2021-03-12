import React from 'react';
import Box from './Box';
import './GameBoard.css';

var playerTurn = true;

var winCheckArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

class GameBoard extends React.Component {
    state = {
        boxes: ['', '', '', '', '', '', '', '', '']
    };

    onBoxClick = (e) => {
        let modifyBoxes = this.state.boxes;

        playerTurn === true ? modifyBoxes[e] = 'X' : modifyBoxes[e] = 'O';
        playerTurn = !playerTurn;
        
        this.setState({ boxes: modifyBoxes });
    }

    checkWinCondition = () => {
        for(var i = 0; i < winCheckArray.length; i++) {
            let a = this.state.boxes[winCheckArray[i][0]];
            let b = this.state.boxes[winCheckArray[i][1]];
            let c = this.state.boxes[winCheckArray[i][2]];

            if(a !== '' && b !== '' && c !== '') {
                if(a === b && b === c ) {
                    console.log("win condition reacherd");
                }
            }
        }
    }

    componentDidUpdate() {
        this.checkWinCondition();
    }

    render() {
        const boxMap = this.state.boxes.map((box, index) => {
            return (
                <Box 
                    boxDisplay={box} 
                    key={index} 
                    index={index}
                    updateBox={this.onBoxClick}
                />
            );
        });
        return (
            <div>
                <div className="game-board">
                    {boxMap}
                </div>
            </div>
            
        );
    }
}

export default GameBoard;