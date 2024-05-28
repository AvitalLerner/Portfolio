import React from 'react';
import './toolbar.css';

export default function Toolbar({ currentStyle, setCurrentStyle, handleLanguageChange, handleAddSymbol, handleEmojiSymbol, handleClearSymbol, applyGlobalStyleChange, keyboardState, language, handleUndo }) {



    const handleColorChange = (e) => {
        const color = e.target.value;
        setCurrentStyle(prevStyle => ({ ...prevStyle, color }));
    };

    const handleFontChange = (e) => {
        const font = e.target.value;
        setCurrentStyle(prevStyle => ({ ...prevStyle, font }));
    };

    const handleSizeChange = (e) => {
        const fontSize = parseInt(e.target.value);
        setCurrentStyle(prevStyle => ({ ...prevStyle, fontSize }));
    };

    const handleLanguageSelect = (e) => {
        handleLanguageChange(e.target.value);
    };

    return (

        <div className="toolbar">
            <select value={language} onChange={handleLanguageSelect}>
                <option value="English">English</option>
                <option value="hebrew">hebrew</option>
                <option value="French">French</option>
                <option value="German">German</option>
            </select>


            <select value={currentStyle.font} onChange={handleFontChange}>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
            </select>

            <select value={currentStyle.fontSize} onChange={handleSizeChange}>
                <option value="18">18</option>
                <option value="20">20</option>
                <option value="22">22</option>
                <option value="24">24</option>
                <option value="26">26</option>
                <option value="28">28</option>
                <option value="28">30</option>
                <option value="28">32</option>
                <option value="36">36</option>
                <option value="36">40</option>
                <option value="36">48</option>
                <option value="36">64</option>
                <option value="36">78</option>


            </select>

            <input type="color" value={currentStyle.color} onChange={handleColorChange} />

            
            <button onClick={() => { applyGlobalStyleChange(); }}>החל על הכל</button>

            <button onClick={handleAddSymbol}>{keyboardState === 'symbols' ? 'abc' : '!#1'}</button>

            <button onClick={handleEmojiSymbol}>{keyboardState === 'Emoji' ? 'abc' : '😀'}</button>

            <button onClick={handleClearSymbol}>
                <img id='trash' src="./img/trash.png" alt="נקה" />
            </button>

            <button onClick={handleUndo} >
                <img id='undo' src="./img/undo.png" alt="undo" />
            </button>




        </div>
    );
}
