import '../css/style.css';

function CardFront(props) {

    return (
        <div className='front-card'>
            <p className='card-question'>
                {props.deckData.cards[0].question}
            </p>
        </div>
    )
}

export default function FlashCard(props) {

    return (
        <>
            <CardFront deckData={props.deckData} />
        </>
    )
}