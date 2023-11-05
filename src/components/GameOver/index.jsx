import React from "react";
import Scoreboard from "../Scoreboard";

function GameOver({ score, players, onRestart }) {

    function findPlayerWithHighestScore(score) {
        let highestPlayer = null;
        let highestScore = -1;

        for (const player in score) {
            if (score[player] > highestScore) {
                highestPlayer = player;
                highestScore = score[player];
            }
        }

        return highestPlayer;
    }

    const highestScoringPlayer = findPlayerWithHighestScore(score);

    return (
        <div>
            <h2>Game Over</h2>
            <Scoreboard score={score} players={players} />

            {highestScoringPlayer && (
                <div>
                    <p>Player with highest score: {highestScoringPlayer}</p>
                </div>
            )}

            <button onClick={onRestart}>Restart</button>
        </div>
    );
}

export default GameOver;