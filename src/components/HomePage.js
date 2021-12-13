import '../css/style.css';
import { decksData } from '../config/config';
import BigLogo from "./BigLogo";
import StartPracticeBtn from "./StartPracticeBtn";

export default function HomePage(props) {

    return (
        <div className='homepage'>
            <BigLogo />
            <input className='zap-target-input' type="number" name="zap-target" placeholder='Sua meta de zaps' onChange={e => props.setZapAnswersTarget(e.target.value)}/>
            <div>
                {decksData.map( (deckData, index) => <StartPracticeBtn key={index} deckName={deckData.name} value={props.value} index={index} selectDeck={props.selectDeck} />)}
            </div>
        </div>
    );
}