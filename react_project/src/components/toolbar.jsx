import React from 'react';

export default function Toolbar({ currentStyle, setCurrentStyle, handleLanguageChange, handleAddSymbol, handleEmojiSymbol, handleClearSymbol, applyGlobalStyleChange}) {
    

    
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
            <input type="number" value={parseInt(currentStyle.fontSize)} min="8" max="30" onChange={handleSizeChange} />


            <button onClick={handleAddSymbol}>Add Symbol</button>

            <button onClick={handleEmojiSymbol}>Emoji</button>

            <button onClick={handleClearSymbol}>clear</button>
            {/* button to general changes */}
            
            <button onClick={() => applyGlobalStyleChange('color', currentStyle.color)}>Apply Color</button>
            <button onClick={() => applyGlobalStyleChange('font', currentStyle.font)}>Apply Font</button>
            <button onClick={() => applyGlobalStyleChange('fontSize', currentStyle.fontSize)}>Apply Font Size</button>
            <button >undo</button>
            


        </div>
    );
}
