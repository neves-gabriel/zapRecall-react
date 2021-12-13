import CardNumberCounter from "./CardNumberCounter";
import TurnCardBtn from "./TurnCardBtn";

export default function CardBack(props) {

    let cardNumber = props.cardNumber;
    const deckLength = props.deckLength;
    let rightAnswers = props.rightAnswers;
    const deckData = props.deckData;
    const showAnswersBtns = props.showAnswersBtns;
    const zapAnswer = props.zapAnswer;
    const zappedAnswers = props.zappedAnswers;

    function handleZapAnswer(value) {
        props.setShowAnswersBtns(false);
        props.setZapAnswer(value);
        if (value === 'zap') {
            props.setZappedAnswers (zappedAnswers + 1)
        }
        if (value === 'zap' || value === 'learned' || value === 'correct') {
            props.setRightAnswers(rightAnswers + 1)
        }
    }

    const btnsData = [
        {
            name: "Aprendi agora",
            border: "#000000",
            value: "learned",
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
            name: "Zap!",
            border: "#FFEF61",
            value: "zap",
        },
    ]

    return (
        <div className={`card-back ${zapAnswer}`} >
            <CardNumberCounter cardNumber={cardNumber} deckLength={deckLength} />
            <p className='card-question-title'>
                {deckData.cards[cardNumber].question}
            </p>
            <p className='card-answer'>
                {deckData.cards[cardNumber].answer}
            </p>
            { showAnswersBtns ? 
                <div className='btns-container'>
                    {btnsData.map(btn => <button style={{ borderColor: btn.border }} key={btn.name} onClick={ () => handleZapAnswer(btn.value) }>
                        {btn.value === "zap" ? <strong>{btn.name}</strong> : <span>{btn.name}</span>}
                    </button>)}
                </div> : null 
            }
            { showAnswersBtns ? null : <TurnCardBtn turnCard={props.turnCard} /> }
        </div>
    )
}