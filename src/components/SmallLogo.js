import '../css/style.css';
import SMALL_LOGO from '../assets/img/small-logo.svg'

export default function SmallLogo() {

    function reloadPage() {
        window.location.reload();
    }

    return (
        <img className="small-logo" src={SMALL_LOGO} alt="small-logo" onClick={reloadPage}/>
    )
}