import './css/App.css';
import { decksData } from './config/config';
import HomePage from './components/HomePage';
import DeckPage from './components/DeckPage';
import React, { useState, useEffect } from "react";
import SucessPage from './components/SucessPage';
import FailurePage from './components/FailurePage';

export default function App() {

    const [showHomePage, setShowHomePage] = useState(true);
    const [showDeckPage, setShowDeckPage] = useState(false);
    const [showSucessPage, setShowSucessPage] = useState(false);
    const [showFailurePage, setShowFailurePage] = useState(false);
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

    function renderSucess() {
        setShowSucessPage(true);
        setShowHomePage(false);
        setShowDeckPage(false);
    }

    function renderFailure() {
        setShowFailurePage(true);
        setShowHomePage(false);
        setShowDeckPage(false);
    }


    return (
        <>
            {showHomePage ? <HomePage deckIndexSelected={deckIndex} selectDeck={startPractice} /> : null}
            {showDeckPage ? <DeckPage deckData={selectedDeckData} renderSucess={renderSucess} renderFailure={renderFailure} /> : null}
            {showSucessPage ? <SucessPage /> : null }
            {showFailurePage ? <FailurePage /> : null}
        </>
    );
}