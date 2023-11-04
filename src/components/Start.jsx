import React, { useState } from 'react';
import Game from './Game';

function Start() {
    const [mostrarJuego, setMostrarJuego] = useState(false);

    const playGame = () => {
        setMostrarJuego(true);
    };

    if (!mostrarJuego) {
        return (
            <div>
                <h1>Guess the animal game!</h1>
                <button onClick={playGame}>Play</button>
            </div>
        );
    } else {
        return <Game />
    }
}

export default Start;