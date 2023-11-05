import React, { useState } from 'react';
import Game from './Game/Game';

function Start() {
    const [mostrarJuego, setMostrarJuego] = useState(false);

    const playGame = () => {
        setMostrarJuego(true);
    };

    if (!mostrarJuego) {
        return (
            <button onClick={playGame}>Play</button>
        );
    } else {
        return <Game />
    }
}

export default Start;