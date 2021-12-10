import '../css/style.css';
import SmallLogo from "./SmallLogo";
import FlashCard from "./FlashCard";
import React, { useState } from "react";

export default function DeckPage(props) {

    const [cardNumber, setCardNumber] = useState(1);

    return (
        <div className='deckpage'>
            <SmallLogo />
            <FlashCard cardNumber={cardNumber} deckData={props.deckData} />
        </div>
    );
}