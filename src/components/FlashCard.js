import '../css/style.css';
import TURN_ICON from '../assets/img/turn-icon.svg'
import React, { useState, useEffect } from "react";

function CardNumberCounter(props) {

    return (
        <span className='card-number-counter'>
            {props.cardNumber}/8
        </span>
    )
}

function TurnCardBtn(props) {

    return (
        <img className="turn-icon" src={TURN_ICON} alt="turn-icon" onClick={props.turnCard}/>
    )
}

function CardFront(props) {

    return (
        <div className='front-card'>
            <p className='card-question'>
                {props.deckData.cards[0].question}
            </p>
            <TurnCardBtn turnCard={props.turnCard} />
        </div>
    )
}

function CardBack(props) {

    const btnsData = [
        {
            name: "Aprendi agora",
            border: "#000000",
            value: "correct",
        },
        {
            name: "Não lembrei",
            border: "#F74848",
            value: "incorrect",
        },
        {
            name: "Lembrei com esforço",
            border: "#62DB38",
            value: "correct",
        },
        {
            name: "Lembrei com esforço",
            border: "#FFEF61",
            value: "correct",
        },
    ]

    return (
        <div className='back-card'>
            <p className='card-question-title'>
                {props.deckData.cards[0].question}
            </p>
            <p className='card-answer'>
                {props.deckData.cards[0].answer}
            </p>
            <div className='btns-container'>
                {btnsData.map(btn => <button style={{ borderColor: btn.border }} onClick={props.handleZapAnswer(btn.value)}>
                    {btn.name}
                </button>)}
            </div>
            {props.isAnswerProcessed ? <TurnCardBtn turnCard={props.turnCard} /> : null}
        </div>
    )
}

export default function FlashCard(props) {

    const [showFrontCard, setShowFrontCard] = useState(true);
    const [showBackCard, setShowBackCard] = useState(false);
    const [isAnswerProcessed, setIsAnswerProcessed] = useState(false);
    const [zapAnswer, setZapAnswer] = useState();

    function turnCard() {
        if (zapAnswer === null || zapAnswer === undefined) {
            setShowFrontCard(false);
            setShowBackCard(true);
        } else {
            props.nextCard();
        }
    }

    function handleZapAnswer(zapAnswer) {
        setZapAnswer(zapAnswer);
        setIsAnswerProcessed(true);
    }

    return (
        <div className='card-container'>
            <CardNumberCounter cardNumber={props.cardNumber} />
            {showFrontCard ? <CardFront deckData={props.deckData} turnCard={turnCard} /> : null}
            {showBackCard ? <CardBack deckData={props.deckData} turnCard={turnCard} isAnswerProcessed={isAnswerProcessed} handleZapAnswer={handleZapAnswer} /> : null}
        </div>
    )
}