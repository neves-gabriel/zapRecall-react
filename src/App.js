import './css/App.css'
import BigLogo from "./components/BigLogo";
import StartPracticeBtn from "./components/StartPracticeBtn"

export default function App() {
    return (
        <div className="homepage">
            <BigLogo />
            <StartPracticeBtn />
		</div>
    );
}