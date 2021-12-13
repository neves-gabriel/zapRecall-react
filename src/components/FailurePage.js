import '../css/style.css';
import SmallLogo from "./SmallLogo";

export default function FailurePage(props) {

    const wrongAnswers = props.wrongAnswers;
    
    return (
        <div className='resultpage'>
            <SmallLogo />
            <div className='title'>
                <h1>Putz.. </h1>
                <span className='sad-but-relieved-face'/>
            </div>
            <p>Você esqueceu {wrongAnswers} flashcards..<br/>
                Não desanime! Na próxima você consegue!
            </p>
        </div>
    )

}