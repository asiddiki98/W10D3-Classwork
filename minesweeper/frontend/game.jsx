import React from "react"
import * as Minesweeper from './minesweeper.js'   
import Board from './board.jsx'

export default class Game extends React.Component{
    constructor(props){ 
    super(props)
        this.state = {
            board: new Minesweeper.Board(9, 9)
        }
        this.updateGame = this.updateGame.bind(this)
        
        this
    }

    restartGame(){
        const board = new Minesweeper.board(9, 9)
        this.setState({board: board})
    }
    
    updateGame(tile, flagged){
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board = this.state.board });
    }
    
    render(){

        
        return (
          <Board board={this.state.board} updateGame={this.updateGame} />
        )
    }


}





