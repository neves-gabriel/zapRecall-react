import '../css/style.css';
import { decksData } from '../config/config';
import SmallLogo from "./SmallLogo";
import FlashCard from "./FlashCard"

export default function DeckPage() {
    return (
        <div className='deckpage'>
            <SmallLogo />
            <FlashCard />
        </div>
    );
}