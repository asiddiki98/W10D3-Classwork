import React from 'react'
import * as Minesweeper from './minesweeper.js'
import Tile from './tile.jsx'


export default class Board extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {

        // }
    }

    render() {
        const board = this.props.board.grid.map((row, index) => {
            const row1 = row.map((tile,idx) =>{
                return (
                    <Tile tiles={tile} key={idx * this.props.board.gridSize + index} updateGame={this.props.updateGame} />
                )
            })
            return (
                <div className="row">
                    { row1 }
                </div>
            )
        });
        return (
            <div className="board">
                { board }
            </div>
        )
    }

}
