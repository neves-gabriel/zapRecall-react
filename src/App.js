import './css/App.css';
import { decksData } from './config/config';
import HomePage from './components/HomePage';
import DeckPage from './components/DeckPage';
import React, { useState, useEffect } from "react";

export default function App() {

    const [showHomePage, setShowHomePage] = useState(true);
    const [showDeckPage, setShowDeckPage] = useState(false);
    const [deckIndex, setDeckIndex] = useState();
    const [selectedDeckData, setSelectedDeckData] = useState({});

    useEffect(() => {
        if (deckIndex !== null && deckIndex !== undefined) {
            setSelectedDeckData(decksData[deckIndex]);
            setShowDeckPage(true);
        }
    }, [deckIndex]);
    
    function startPractice(deckIndexSelected) {
        setShowHomePage(false);
        setDeckIndex(deckIndexSelected);
    }
    
    return (
        <>
            {showHomePage ? <HomePage deckIndexSelected={deckIndex} selectDeck={startPractice} /> : null}
            {showDeckPage ? <DeckPage deckData={selectedDeckData} /> : null}
        </>
    );
}