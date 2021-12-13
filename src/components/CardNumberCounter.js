export default function CardNumberCounter(props) {

    let cardNumber = props.cardNumber;
    const deckLength = props.deckLength;

    return (
        <span className='card-number-counter'>
            {cardNumber + 1}/{deckLength}
        </span>
    )
}