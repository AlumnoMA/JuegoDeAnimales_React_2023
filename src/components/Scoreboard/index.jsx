import React from "react";

function Scoreboard({ score, players }) {
    return (
        <div>
            <h2>Score:</h2>
            <ul>
                {players.map((player) => (
                    <li key={player}>
                        {player}: {score[player] || 0}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Scoreboard;