import React, { useState, useEffect } from "react";
import PlayerInput from "./PlayerInput/index.jsx";
import AnimalImage from "./Animal/index.jsx";
import Scoreboard from "./Scoreboard";
import GameOver from "./GameOver";
import animalsData from "../data/animals.json";

// Determine the maximum number of rounds.
let maxRounds = Math.floor(Math.random() * (10 - 5 + 1) + 5);
let totalRounds = maxRounds * 2;

function Game() {
    const [players, setPlayers] = useState([]); // State to store player names.
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // Index of the current player.
    const [score, setScore] = useState({}); // State to store player scores.
    const [roundsPlayed, setRoundsPlayed] = useState(0); // Number of rounds played.
    const [currentAnimal, setCurrentAnimal] = useState(null); // The current animal to be guessed.
    const [shuffledOptions, setShuffledOptions] = useState([]); // Shuffled answer options for the current animal.

    useEffect(() => {
        if (roundsPlayed < totalRounds) {
            generateNewRound();
        }
    }, [roundsPlayed]);

    // Generate a new round of the game.
    const generateNewRound = () => {
        let correctAnimal = getRandomAnimal();
        let randomOptions = [correctAnimal];

        while (randomOptions.length < 3) {
            const opcion = getRandomAnimal();
            if (!randomOptions.includes(opcion)) {
                randomOptions.push(opcion);
            }
        }

        setCurrentAnimal(correctAnimal);
        setShuffledOptions([...randomOptions].sort(() => Math.random() - 0.5));
    };

    // Choose a random animal.
    const getRandomAnimal = () => {
        let animals = animalsData;
        const randomIndex = Math.floor(Math.random() * animals.length);
        return animals[randomIndex];
    }

    // Handle the player's guess.
    const handleGuess = (guess) => {
        let currentScore = score[players[currentPlayerIndex]] || 0;

        if (guess.toLowerCase() === currentAnimal.nameEn.toLowerCase()) {
            currentScore += 1;
        }

        setScore({
            ...score,
            [players[currentPlayerIndex]]: currentScore,
        });
        setRoundsPlayed((prevRoundsPlayed) => prevRoundsPlayed + 1);

        if (currentPlayerIndex === players.length - 1) {
            setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
        } else {
            setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
        }
    }

    // Start the game with player names.
    const startGame = (playerNames) => {
        setPlayers(playerNames);
    }

    // Restart the game.
    const restartGame = () => {
        setCurrentPlayerIndex(0);
        setScore({});
        setRoundsPlayed(0);
        setCurrentAnimal(null);
        setShuffledOptions([]);
        setPlayers([]);
        maxRounds = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    };

    if (roundsPlayed < totalRounds) {
        return (
            <>
                <h1>Guess the animal game!</h1>
                {players.length < 2 ? (
                    <PlayerInput onPlayersSet={startGame} />
                ) : (
                    <>
                        <h3>Round {parseInt(roundsPlayed / 2)} of {maxRounds}</h3>
                        <h2>{players[currentPlayerIndex]} turn</h2>
                        {currentAnimal && (
                            <section>
                                <AnimalImage animal={currentAnimal} onGuess={handleGuess} />
                                {shuffledOptions.map((option, index) => (
                                    <div key={index}>
                                        <button onClick={() => handleGuess(option.nameEn)}>
                                            {option.nameEn}
                                        </button>
                                    </div>
                                ))}
                            </section>
                        )}

                        <Scoreboard score={score} players={players} />
                    </>
                )}
            </>
        );
    } else {
        return <GameOver score={score} players={players} onRestart={restartGame} />;
    }
}

export default Game;