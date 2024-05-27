import React from 'react';
import './toolbar.css';

export default function Toolbar({ currentStyle, setCurrentStyle, handleLanguageChange, handleAddSymbol, handleEmojiSymbol, handleClearSymbol, applyGlobalStyleChange, keyboardState}) {
    

    
    const handleColorChange = (e) => {
        const color = e.target.value;
        setCurrentStyle(prevStyle => ({ ...prevStyle, color }));
    };
    
    const handleFontChange = (e) => {
        const font = e.target.value;
        setCurrentStyle(prevStyle => ({ ...prevStyle, font }));
    };
    
    const handleSizeChange = (e) => {
        const fontSize = `${e.target.value}px`;
        setCurrentStyle(prevStyle => ({ ...prevStyle, fontSize }));
    };
    
    const handleLanguageSelect = (e) => {
        handleLanguageChange(e.target.value);
    };

    // const handleLanguageChange = (e) => {
	// 	if (e.target.value === 'english') {
	// 		setKeyboardState('lowerCase');
	// 	}
	// 	else {
	// 		setKeyboardState(e.target.value);
	// 	}
	// }

    const handleSymbolButtonClick = () => {
        handleAddSymbol();
    };
    
    return (

        <div className="toolbar">
            <select value="language" onChange={handleLanguageSelect}>
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

            <input type="color" value={currentStyle.color} onChange={handleColorChange} />
            {/* <input type="number" value={parseInt(currentStyle.fontSize)} min="8" max="30" onChange={handleSizeChange} /> */}

            <button onClick={() => {applyGlobalStyleChange('color', currentStyle.color); applyGlobalStyleChange('font', currentStyle.font); applyGlobalStyleChange('fontSize', currentStyle.fontSize);}}>החל על הכל</button>

            <button onClick={handleAddSymbol}>{keyboardState==='symbols'? 'abc': '!#1'}</button>

            <button onClick={handleEmojiSymbol}>{keyboardState==='Emoji'? 'abc': '😀'}</button>

            <button onClick={handleClearSymbol}>
                <img id='trash' src="./img/trash.png" alt="נקה" />
            </button>
            
            {/* button to general changes */}
            
            {/* <button onClick={() => { console.log(currentStyle.color);
                applyGlobalStyleChange('color', currentStyle.color)}}>Apply Color</button> */}

            {/* <button onClick={() => applyGlobalStyleChange('font', currentStyle.font)}>Apply Font</button>
            <button onClick={() => applyGlobalStyleChange('fontSize', currentStyle.fontSize)}>Apply Font Size</button> */}
            {/* <button onClick={handleToggleCase}>Toggle Case</button> Add the toggle case button */} 
            <button >
                <img id='undo' src="./img/undo.png" alt="undo" />
            </button>

            {/* <button onClick={() => applyGlobalStyleChange('fontSize', currentStyle.fontSize)}>Apply Font Size</button> */}
            {/* <button >Toggle Case</button> */}
            


        </div>
    );
}
