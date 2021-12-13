import '../css/style.css';
import SmallLogo from "./SmallLogo";
import React, { useState } from "react";
import CardFront from "./CardFront"
import CardBack from "./CardBack"

export default function DeckPage(props) {

    const deckData = props.deckData;
    const deckLength = (props.deckData.cards).length;
    const zapAnswersTarget = props.zapAnswersTarget;

    let [cardNumber, setCardNumber] = useState(0);
    const [isCardTurned, setIsCardTurned] = useState(false);
    const [zapAnswer, setZapAnswer] = useState();
    const [rightAnswers, setRightAnswers] = useState(0);
    const [zappedAnswers, setZappedAnswers] = useState(0);
    const [showAnswersBtns, setShowAnswersBtns] = useState(true);

    function turnCard() {
        if (cardNumber + 1 === deckLength && isCardTurned === true) {
            renderResult(rightAnswers);
        } else {
            if (isCardTurned === true) {
            setCardNumber(cardNumber + 1);
            setZapAnswer('');
            setShowAnswersBtns(!showAnswersBtns);
            setIsCardTurned(!isCardTurned);
            } else {
            setIsCardTurned(!isCardTurned);
            }
        } 
    }

    function renderResult() {
        if (rightAnswers === deckLength && zappedAnswers >= zapAnswersTarget) {
            props.renderSucess();
        } else {
            props.renderFailure();
        }
    }

    return (
        <div className='deckpage'>
            <SmallLogo />
            <span className='deck-title'>{deckData.name}</span>
            { isCardTurned ? <CardBack cardNumber={cardNumber} deckLength={deckLength} deckData={deckData} zapAnswer={zapAnswer} showAnswersBtns={showAnswersBtns} rightAnswers={rightAnswers} zappedAnswers={zappedAnswers}
                turnCard={turnCard} setZapAnswer={setZapAnswer} setRightAnswers={setRightAnswers} setShowAnswersBtns={setShowAnswersBtns} setZappedAnswers={setZappedAnswers} /> 
                : <CardFront cardNumber={cardNumber} deckLength={deckLength} deckData={deckData} turnCard={turnCard} /> 
            }
        </div>
    );
}