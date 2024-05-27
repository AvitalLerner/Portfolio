import React from "react";
import "../css/Header.css";

const Header = ({ ShowPodium, StartNewGame, AddNewPlayer }) => {
    return (
        <div className="header">
            <div className="header-buttons">
                <button onClick={ShowPodium} className="option-button" id="accom-b" role="button">
                    <img src="/img/accom.png" alt="השגים" className="accom" />הישגים
                </button>
                <button onClick={StartNewGame} className="option-button" id="new-g-b" role="button"><img src="/img/restart.png" alt="התחל" className="restart" />משחק חדש</button>
                <button onClick={AddNewPlayer} className="option-button" id="new-p-b" role="button"><img src="/img/plus.png" alt="הוסף" className="plus" />שחקן חדש</button>
            </div>
        </div>
    );
}

export default Header;