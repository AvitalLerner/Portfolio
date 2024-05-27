import React from 'react';
import '../css/GotHundred.css';

const GotHundred = ({ Steps, Name, style, DeleteCurrentPlayer, RestartNumber }) => {

    const handleExit = () => {
        DeleteCurrentPlayer();
    }

    const handleRestart = () => {
        RestartNumber();
    }

    return (
        <div style={style} dir="rtl" className="got-hundred">
            <div className="got-hundred-text1">כל הכבוד {Name}!</div>
            <div className="got-hundred-text2">הגעת ל100 ב<span>{Steps}</span> צעדים</div>
            <button  onClick={handleRestart} className="option-button restart-button" role="button">התחל מחדש</button>
            <button  onClick={handleExit} className="option-button exit-button" role="button">צא מהמשחק</button>
        </div>
    );
}

export default GotHundred;