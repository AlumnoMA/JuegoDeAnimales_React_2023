import React, { useState } from 'react';
import Game from './Game';

function Start() {
    const [mostrarJuego, setMostrarJuego] = useState(false);

    const playGame = () => {
        setMostrarJuego(true);
    };

    if (!mostrarJuego) {
        return (
            <div className='start-container'>
                <button className='start-button' onClick={playGame}>Play</button>
            </div>
        );
    } else {
        return <Game />
    }
}

export default Start;