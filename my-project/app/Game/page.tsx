"use client";
import React, { useState } from "react";

const Game = () => {
  let [number, setNumber] = useState(0); //for dice
  let [activePlayer, setActivePlayer] = useState(0);//for the activePlayer
  let [players, setPlayers] = useState([{ player: 1, score: 0 }, { player: 2, score: 0 }]);  //player-1 and player-2
  let [gameOver, setGameOver] = useState(false);// keeps game running
  const winScore = 50;
  let rollDice = () => {
    const diceValue = (Math.floor(Math.random() * 6 + 1)); //gives 1 to 6
    setNumber(diceValue)
    if (diceValue === 1) {
      setActivePlayer(0)
      switchPlayer()
      return;
    }
    setGameOver(activePlayer >= winScore ? true : false)//this is not running for now
  };
  let switchPlayer = () => {
    // setPlayers(prev => (prev == 0) ? 1 : 0) 
  }

  return (
    <div className="yourScore">
      <div className="score-board border">
        <h1>Your Score</h1>
        <div>{activePlayer}</div>
      </div>
      <div>{number}</div>
      <div className="button-container">
        <button onClick={rollDice} className="border">
          Roll Dice
        </button>
      </div>

    </div>

  );
};

export default Game;
