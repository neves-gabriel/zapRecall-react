import TURN_ICON from '../assets/img/turn-icon.svg'

export default function TurnCardBtn(props) {

    return (
        <img className="turn-icon" src={TURN_ICON} alt="turn-icon" onClick={props.turnCard}/>
    )
}