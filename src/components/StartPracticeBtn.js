import '../css/style.css';

export default function BigLogo(props) {

    return (
        <button className="start-practice-btn" onClick={props.startPractice}>
            <span className='deck-name'>{props.decksData.name}</span>
            <span className='forward-icon'/>
            <span className='forward-icon'/>
        </button>
    )
}