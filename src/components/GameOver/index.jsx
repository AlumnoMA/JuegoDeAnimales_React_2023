import React from "react";
import Scoreboard from "../Scoreboard";

function GameOver({ score, players, onRestart }) {
    return (
        <div>
            <h1>Guess the animal game!</h1>
            <h2>Game Over</h2>
            <Scoreboard score={score} players={players} />
            <button onClick={onRestart}>Restart</button>
        </div>
    );
}

export default GameOver;