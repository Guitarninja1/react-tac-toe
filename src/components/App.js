import GridBox from './GridBox';
import './App.css';
import React from 'react';


class App extends React.Component {
  state = {
    isX: true,
    squares: Array(9).fill({value: ''})
  }
  playerTurn = (ham) => {
    // player chooses available square
    const square = JSON.parse(JSON.stringify(this.state.squares[ham]))
    // log the chosen square ham
    if(square.value !== '') {
      return;
    }
    square.value = this.state.isX ? 'X' : 'O';
    // make square one time use
    // change player's turn
    const squares = [...this.state.squares]
    this.setState({
      isX: !this.state.isX,
      squares: squares.map((oldSquare, pastrami, oldSquares) => {
        // update state with new value
        if (ham !== pastrami) {
          return oldSquare
        }
        return square
      })
    }, this.checkWinCondition)
  };
  
  clearGame = (index) => {
    let text = 'Play Again?'
    const squares = this.state.squares;
    let clear = window.confirm(`Player ${squares[index].value} has won!`)
    if(clear === true) {
      this.setState({
        squares: Array(9).fill({value: ''})
      })
      return text
    }
  }
  checkWinCondition = () => {
    const squares = this.state.squares;
    if(squares[0].value && squares[1].value && squares[2].value ===  squares[0].value && squares[1].value === squares[0].value ) {
      return alert(this.clearGame(0))}
    if(squares[3].value && squares[4].value && squares[5].value ===  squares[3].value && squares[4].value === squares[3].value ) {
      return alert(this.clearGame(3))    }
    if(squares[6].value && squares[7].value && squares[8].value ===  squares[6].value && squares[7].value === squares[6].value ) {
      return alert(this.clearGame(6))    }
    if(squares[0].value && squares[3].value && squares[6].value ===  squares[0].value && squares[3].value === squares[0].value ) {
      return alert(this.clearGame(0))    }
    if(squares[1].value && squares[4].value && squares[7].value ===  squares[1].value && squares[4].value === squares[1].value ) {
      return alert(this.clearGame(1))    }
    if(squares[2].value && squares[5].value && squares[8].value ===  squares[2].value && squares[5].value === squares[2].value ) {
      return alert(this.clearGame(2))}
    if(squares[0].value && squares[4].value && squares[8].value ===  squares[0].value && squares[4].value === squares[0].value ) {
      return alert(this.clearGame(0))    }
    if(squares[2].value && squares[4].value && squares[6].value ===  squares[2].value && squares[4].value === squares[2].value ) {
      return alert(this.clearGame(2))    }
    // if(!) {
    //   return alert(`NO WINNER!`)
    // }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Current Player Is {this.state.isX ? 'X' : 'O'}</h1>
          <div className='board'>
            {
              this.state.squares.map(
                (square, index) => (<GridBox square={square} ham={index} key={index} playerTurn={this.playerTurn} />)
              )
            }
          </div>  
        </header>
      </div>
    )
  }
}



export default App;