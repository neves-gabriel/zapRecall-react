import CardNumberCounter from "./CardNumberCounter";
import TurnCardBtn from "./TurnCardBtn";

export default function CardFront(props) {

    let cardNumber = props.cardNumber;
    const deckLength = props.deckLength;
    const deckData = props.deckData;

    return (
        <div className='card-front' data-identifier="flashcard">
            <CardNumberCounter cardNumber={cardNumber} deckLength={deckLength} />
            <p className='card-question'>
                {deckData.cards[cardNumber].question}
            </p>
            <TurnCardBtn turnCard={props.turnCard} />
        </div>
    )
}