import '../css/style.css';
import SmallLogo from "./SmallLogo";
import React, { useState } from "react";
import CardFront from "./CardFront"
import CardBack from "./CardBack"

export default function DeckPage(props) {

    const deckData = props.deckData;
    const deckLength = (props.deckData.cards).length;

    let [cardNumber, setCardNumber] = useState(0);
    const [isCardTurned, setIsCardTurned] = useState(false);
    const [zapAnswer, setZapAnswer] = useState();
    const [rightAnswers, setRightAnswers] = useState(0);
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
        if (rightAnswers === deckLength) {
            props.renderSucess();
        } else {
            props.renderFailure();
        }
    }

    return (
        <div className='deckpage'>
            <SmallLogo />
            { isCardTurned ? <CardBack cardNumber={cardNumber} deckLength={deckLength} deckData={deckData} zapAnswer={zapAnswer} showAnswersBtns={showAnswersBtns} rightAnswers={rightAnswers}
                turnCard={turnCard} setZapAnswer={setZapAnswer} setRightAnswers={setRightAnswers} setShowAnswersBtns={setShowAnswersBtns} /> 
                : <CardFront cardNumber={cardNumber} deckLength={deckLength} deckData={deckData} turnCard={turnCard} /> 
            }
        </div>
    );
}