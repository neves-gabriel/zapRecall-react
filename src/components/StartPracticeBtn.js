import '../css/style.css';

export default function StartPracticeBtn(props) {

    return (
        <button className="start-practice-btn" onClick={() => props.selectDeck(props.index)}>
            <span className='deck-name'>{props.deckName}</span>
            <span className='forward-icon'/>
            <span className='forward-icon'/>
        </button>
    )
}