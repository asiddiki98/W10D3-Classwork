import React from 'react'
import * as Minesweeper from './minesweeper.js'


export default class Tile extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e){

        const flagged = e.altKey ? true : false
        this.props.updateGame(this.props.tiles, flagged)
    }




    render() {
        const tile = this.props.tiles;
        let state, text, count;
        if (tile.explored){
            if (tile.bombed){
                state = 'bombed';
                text = '&#x1F4A3;';
            } else {
                state = 'explored';
                count = tile.adjacentBombCount();
                text = (count > 0 ? `${count}` : "")
            }
        } else if (tile.flagged) {
            state = 'flagged';
            text = "&#9873;"
        } else {
            state = 'unexplored'
        }

        return (
            <div onClick={this.handleClick} className={state}>{text}</div>
        )
    }
}

