import '../css/style.css';
import SmallLogo from "./SmallLogo";

export default function FailurePage(props) {
    
    return (
        <div className='resultpage'>
            <SmallLogo />
            <div className='title'>
                <h1>Putz.. </h1>
                <span className='sad-but-relieved-face'/>
            </div>
            <p>Você esqueceu alguns flashcards..<br/>
                Não desanime! Na próxima você consegue!
            </p>
        </div>
    )

}