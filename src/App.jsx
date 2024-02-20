import React, { useState } from 'react'
import Block from './Components/Block'
import "./App.css";

const App = () => {

  const [state, setState] = useState([null, null, null, null, null, null, null, null, null]);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const checkWinner = () => {
    const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c])
        return true;
    } return false;
  }

  const handleOnclick = (number) => {
    const stateCopy = state;
    state[number] = currentPlayer;
    setState(stateCopy);
    const win = checkWinner();
    const result = document.getElementById('result');

    if (win) {
      result.innerText = `Winner is ${currentPlayer}`;

    }
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <div className='container'>

      <b id='result'></b>

      <div className='board'>
        <button id='btn34' onClick={() => {
          setState([null, null, null, null, null, null, null, null, null]);
        }}>Clear</button>

        <div className='row'>

          <Block onClick={() => handleOnclick(0)} value={state[0]} />
          <Block onClick={() => handleOnclick(1)} value={state[1]} />
          <Block onClick={() => handleOnclick(2)} value={state[2]} />

        </div>
        <div className='row'>

          <Block onClick={() => handleOnclick(3)} value={state[3]} />
          <Block onClick={() => handleOnclick(4)} value={state[4]} />
          <Block onClick={() => handleOnclick(5)} value={state[5]} />

        </div>
        <div className='row'>

          <Block onClick={() => handleOnclick(6)} value={state[6]} />
          <Block onClick={() => handleOnclick(7)} value={state[7]} />
          <Block onClick={() => handleOnclick(8)} value={state[8]} />

        </div>
      </div>
    </div>
  )
}

export default App



























/*
import './App.css';
import Block from './Components/Block';
import { useState } from 'react';

function App() {
  const [state, setState] = useState([null, null, null, null, null, null, null, null, null]);
  const [currenrtPlayer, setCurrentPlayer] = useState("X");


  //Winning Criteria
  const checkWinner = () => {
    const win = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] == state[c]) return true;
    } return false
  }

  const handleOnClick = (number) => {
    const stateCopy = state;
    if (stateCopy[number] != null) return;
    state[number] = currenrtPlayer;
    setState(stateCopy)
    const win = checkWinner();
    const result = document.getElementById('result');
    if (win) {
      // alert(`${currenrtPlayer} Won the game`)

      result.innerText = `${currenrtPlayer} Won the game`;

    }
    setCurrentPlayer(currenrtPlayer === 'X' ? 'O' : 'X');

  }

  return (
    <>
      <div className="container">
        <b id='result'></b>
        <div className="board">

          <div className="row">
            <Block onClick={() => handleOnClick(0)} value={state[0]} />
            <Block onClick={() => handleOnClick(1)} value={state[1]} />
            <Block onClick={() => handleOnClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Block onClick={() => handleOnClick(3)} value={state[3]} />
            <Block onClick={() => handleOnClick(4)} value={state[4]} />
            <Block onClick={() => handleOnClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Block onClick={() => handleOnClick(6)} value={state[6]} />
            <Block onClick={() => handleOnClick(7)} value={state[7]} />
            <Block onClick={() => handleOnClick(8)} value={state[8]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
*/