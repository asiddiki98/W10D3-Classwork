import React from "react"
import {Tile, Board} from './minesweeper.js'   

export default class Game extends React.Component{
    constructor(props){ 
    super(props)
        this.state = {
            board: new Board(gridSize, numBombs)

        }
        this.updateGame = this.updateGame.bind(this)
    }
    
    updateGame(){

    }
    
    render(){
        return (
          < Grid board1={this.state.board} updateGame={this.updateGame} />
        )
    }


}


 class Grid extends React.Component{
    constructor(props){ 
    super(props)
        // this.state = {
            
        // }
     debugger   
    }

  render(){
    return (
        <Plate /> 
    )
  }

}


 class Plate extends React.Component{
    render(){
        return ( <h1>T</h1>
        )
    }
}