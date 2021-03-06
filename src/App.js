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
    const [zapAnswersTarget , setZapAnswersTarget] = useState('')
    const [wrongAnswers , setWrongAnswers] = useState(4)

    useEffect(() => {
        if (deckIndex !== null && deckIndex !== undefined) {
            setSelectedDeckData(decksData[deckIndex]);
            setShowDeckPage(true);
        }
    }, [deckIndex]);
    
    function startPractice(deckIndexSelected) {
        if(zapAnswersTarget !== '' && zapAnswersTarget >= 1) {
        setShowHomePage(false);
        setDeckIndex(deckIndexSelected);
        } else {
            alert("A sua meta de Zaps tem que ser um número maior que 1")
        }
    }

    function restartPractice() {
        setWrongAnswers(0);
        setShowHomePage(false);
        setShowSucessPage(false);
        setShowFailurePage(false);
        setShowDeckPage(true);
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
            {showHomePage ? <HomePage deckIndexSelected={deckIndex} selectDeck={startPractice} setZapAnswersTarget={setZapAnswersTarget} /> : null}
            {showDeckPage ? <DeckPage deckData={selectedDeckData} renderSucess={renderSucess} renderFailure={renderFailure} zapAnswersTarget={zapAnswersTarget} setWrongAnswers={setWrongAnswers} /> : null}
            {showSucessPage ? <SucessPage restartPractice={restartPractice} /> : null }
            {showFailurePage ? <FailurePage wrongAnswers={wrongAnswers} restartPractice={restartPractice} /> : null}
        </>
    );
}