import React, { useState } from "react";
import "./style.css";

function PlayerInput({ onPlayersSet }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [startButtonDisabled, setStartButtonDisabled] = useState(true);

  const handlePlayerNameChange = (e, playerNumber) => {
    const playerName = e.target.value;
    if (playerNumber === 1) {
      setPlayer1(playerName);
    } else {
      setPlayer2(playerName);
    }

    if (player1.trim() !== "" && player2.trim() !== "") {
      setStartButtonDisabled(false);
    } else {
      setStartButtonDisabled(true);
    }
  }

  const handleStartGame = () => {
    const playerNames = [player1, player2];
    onPlayersSet(playerNames);
  }

  return (
    <section className="players-container">
      <h2 className="subtitle">Players name:</h2>
      <input className="player-input" type="text" placeholder="Enter Player 1's Name" value={player1} required onChange={(e) => handlePlayerNameChange(e, 1)} />
      <input className="player-input" type="text" placeholder="Enter Player 2's Name" value={player2} required onChange={(e) => handlePlayerNameChange(e, 2)} />

      <button className="button start-button" onClick={handleStartGame} disabled={startButtonDisabled}>Start</button>
    </section>
  );
}

export default PlayerInput;
