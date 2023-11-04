import React, { useState } from "react";

function PlayerInput({ onPlayersSet }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleStartGame = () => {
    const playerNames = [player1, player2];
    onPlayersSet(playerNames);
  }

  return (
    <section>
      <h2>Players name:</h2>
      <input type="text" placeholder="Enter Player 1's Name" value={player1} onChange={(e) => setPlayer1(e.target.value)} />
      <input type="text" placeholder="Enter Player 2's Name" value={player2} onChange={(e) => setPlayer2(e.target.value)} />

      <button onClick={handleStartGame}>Start</button>
    </section>
  );
}

export default PlayerInput;