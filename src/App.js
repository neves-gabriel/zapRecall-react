import './css/App.css';
import HomePage from './components/HomePage';
import DeckPage from './components/DeckPage';
import React, { useState } from "react";

export default function App() {

    const [showHomePage, setShowHomePage] = useState(true);
    const [showDeckPage, setShowDeckPage] = useState(false);

    function startPractice() {
        setShowHomePage(false);
        setShowDeckPage(true);
    }

    return (
        <>
            {showHomePage ? <HomePage startPractice={startPractice} /> : null}
            {showDeckPage ? <DeckPage /> : null}
        </>
    );
}