import React from "react";

function AnimalImage({ animal }) {

    return (
        <div>
            <h3>Guess the animal!:</h3>
            <img src={animal.image} alt={animal.name} />
        </div>
    );
}

export default AnimalImage;