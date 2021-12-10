import '../css/style.css';
import BIG_LOGO from '../assets/img/big-logo.svg'

export default function BigLogo() {

    function reloadPage() {
        window.location.reload();
    }

    return (
        <img className="big-logo" src={BIG_LOGO} alt="big-logo" onClick={reloadPage}/>
    )
}