import '../css/style.css';
import { decksData } from '../config/config';
import BigLogo from "./BigLogo";
import StartPracticeBtn from "./StartPracticeBtn";

export default function HomePage(props) {
    return (
        <div className='homepage'>
            <BigLogo />
            <div>
                {decksData.map(decksData => <StartPracticeBtn key={decksData.name} decksData={decksData} startPractice={props.startPractice} />)}
            </div>
        </div>
    );
}