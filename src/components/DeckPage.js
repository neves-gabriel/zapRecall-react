import '../css/style.css';
import SmallLogo from "./SmallLogo";
import FlashCard from "./FlashCard";
import React, { useState } from "react";

export default function DeckPage(props) {

    let [cardNumber, setCardNumber] = useState(1);

    function nextCard() {
        setCardNumber(cardNumber++);
    }


    return (
        <div className='deckpage'>
            <SmallLogo />
            <FlashCard cardNumber={cardNumber} deckData={props.deckData} nextCard={nextCard} />
        </div>
    );
}