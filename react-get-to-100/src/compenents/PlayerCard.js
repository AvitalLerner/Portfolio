// ImageCard.js
import React from 'react';
import '../css/PlayerCard.css';

const PlayerCard = ({ src, className, onClick, playerName, playerNum, playerSteps, color }) => {
    return (
        <div  className={className} id="player-card" onClick={onClick}>
            <img src={src} alt="תמונה" />
            <div className="inner-card" style={{ backgroundColor: color === 0 ? '#893275' : color === 1 ? '#2860C6' : color === 2 ? '#FB2E4D' : color === 3 ? '#FDAA02' : '#FFD700'
            }}>
            <div dir="rtl" className="player-name">{playerName}</div>
            <div className="player-score">{playerNum}</div>
            <div className="player-steps">{playerSteps} steps</div>
            </div>

        </div>
    );
};

export default PlayerCard;
