import React from 'react'
import './GridBox.css'




const GridBox = (props) => {
    
    return (
        
        <input type="button" value={props.square.value} onClick={() => props.playerTurn(props.ham)} />
    )  
}

export default GridBox
