import '../css/style.css';

export default function StartPracticeBtn(props) {

    return (
        <button className="start-practice-btn" onClick={() => props.selectDeck(props.index)} data-identifier="start-zap-recall">
            <span className='deck-name'>Praticar {props.deckName}</span>
            <span className='forward-icon'/>
            <span className='forward-icon'/>
        </button>
    )
}