import React from "react";
import "./style.css";

function AnimalImage({ animal }) {

    return (
        <div className="img-container">
            <h3>What animal is this?:</h3>
            <img src={animal.img} alt={animal.nameEn} />
        </div>
    );
};

export default AnimalImage;