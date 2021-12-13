import '../css/style.css';
import SmallLogo from "./SmallLogo";

export default function SucessPage(props) {
    
    return (
        <div className='resultpage'>
            <SmallLogo />
            <div className='title'>
                <h1>PARABÉNS! </h1>
            <span className='partying-face'/>
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
        </div>
    )

}