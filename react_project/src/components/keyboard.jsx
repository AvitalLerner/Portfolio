
import React, { useState } from 'react';
import './keyboard.css';
import Key from './key';
import Screen from './screen';
import Toolbar from './toolbar';


export default function Keyboard() {


	const [styledText, setStyledText] = useState([]);
	const [currentStyle, setCurrentStyle] = useState({ color: 'Black', font: 'Arial', size: '16px' });
	const [language, setLanguage] = useState('english');

	// const [inputText, setInputText] = useState('');
	const [keyboardState, setKeyboardState] = useState('lowerCase');
	// const [colorText, setColor] = useState('Black');
	// const [fontText, setFont] = useState('Arial');

	const handleKeyClick = (key) => {

		switch (key) {
			case 'Shift':
				handleShiftKey();
				break;
			case 'Space':
				handleSpaceKey();
				break;
			case 'Enter':
				handleEnterKey();
				break;
			case 'delete':
				handleDeleteKey();
				break;
			case 'language':
				handleLanguageKey();
				break
			default:
				handleRegularKey(key);
				break;
		}

	}

	const handleDeleteKey = () => {
		let updatedText = styledText.slice(0, -1);
		setStyledText(updatedText);
	}
	const handleEnterKey = () => {
		let newStyledText = [...styledText, { text: '\n', style: currentStyle }];
		setStyledText(newStyledText);
	};

	const handleShiftKey = () => {

		var updatedState = keyboardState;
		switch (updatedState) {
			case 'lowerCase':
				updatedState = 'oneUpperCase';
				break;
			case 'oneUpperCase':
				updatedState = 'manyApperCase';
				break;
			case 'manyApperCase':
				updatedState = 'lowerCase';
				break;
			default:
				break;
		}
		setKeyboardState(updatedState);
	}

	const applyGlobalStyleChange = (property, value) => {
        const updatedText = styledText.map(part => ({
            ...part,
            style: { ...part.style, [property]: value }
        }));
        setStyledText(updatedText);
    };
	

	const handleSpaceKey = () => {
		let newStyledText = [...styledText, { text: ' ', style: currentStyle }];
		setStyledText(newStyledText);
	};

	const handleRegularKey = (key) => {
		let newStyledText = [...styledText, { text: key, style: currentStyle }];
		setStyledText(newStyledText);
		if (keyboardState === 'oneUpperCase') {
			setKeyboardState('lowerCase');
		}
	};

	const handleLanguageChange = (language) => {
		if (language === 'english') {
			setKeyboardState('lowerCase');
		} else {
			setKeyboardState(language);
			setLanguage(language);
		}
	};
	

	// const handleColorChange = (e) => {
	// 	setCurrentStyle(prevStyle => ({ ...prevStyle, color: e.target.value }));
	// };

	// const handleFontChange = (e) => {
	// 	setCurrentStyle(prevStyle => ({ ...prevStyle, font: e.target.value }));
	// };

	// const handleSizeChange = (e) => {
	// 	setCurrentStyle(prevStyle => ({ ...prevStyle, fontSize: e.target.value }));
	// };


	const handleAddSymbol = () => {
		let updatedState = keyboardState;
		if (updatedState === 'symbols') {
			switch (language) {
				case 'english':
					updatedState = 'lowerCase';
					break;
				case 'hebrew':
					updatedState = 'hebrew';
					break;
				default:
					updatedState = 'lowerCase';
					break;
			}
		}
		else {
			updatedState = 'symbols';
		}
		setKeyboardState(updatedState);
	}

	const handleEmojiSymbol = () => {
		let updatedState = keyboardState;
		if (updatedState === 'Emoji') {
			updatedState = 'lowerCase';
		}
		else {
			updatedState = 'Emoji';
		}
		setKeyboardState(updatedState);
	}
	const handleClearSymbol = () => {
		setStyledText([]);
	}
	const specialKeys = [
		'Space', 'Shift', 'Enter', 'delete'
	];

	const numbers = [
		'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
	];

	const Emoji = [
		'😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
		'😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😛', '😝',
		'😜', '😎', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '😣',
	]


	const returnKeyValues = () => {

		const lowerCase = [
			'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
			'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
			'z', 'x', 'c', 'v', 'b', 'n', 'm'
		];
		const upperCase = lowerCase.map(letter => letter.toUpperCase());

		const hebrew = [
			'ק', 'ו', 'א', 'ר', 'ת', 'י', 'ו', 'ן', 'ם', 'פ',
			'ש', 'ס', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל',
			'ז', 'ס', 'ב', 'נ', 'מ', 'צ', 'ת'
		];
		const symbols = [
			'!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
			'_', '-', '+', '=', '{', '}', '[', ']', '|', '\\',
			':', ';', '"', "'", '<', '>', ',', '.', '?', '/'
		];


		switch (keyboardState) {
			case 'lowerCase':
				return lowerCase;
			case 'oneUpperCase':
				return upperCase;
			case 'manyApperCase':
				return upperCase;
			case 'hebrew':
				return hebrew;
			case 'symbols':
				return symbols;
			case 'Emoji':
				return Emoji;

			default:
				return lowerCase;
		}


	}


	return (

		<div className="keyboard">
			<Screen styledText={styledText} />

			<div className="keyboardcontainer">
				<div className="container">
					<div className="row numbers">
						{
							numbers.map((number, index) => (
								<Key key={index} value={number} onClick={() => handleRegularKey(number)} />
							))
						}
					</div>
					<div className="row innerKeybaord">
						{
							returnKeyValues().map((keyvalue, index) => (
								<Key key={index} value={keyvalue} onClick={() => handleRegularKey(keyvalue)} />
							))
						}


					</div>
					<div className="row acction">
						{
							specialKeys.map((key, index) => (
								<Key key={index} value={key} onClick={() => handleKeyClick(key)} />
							))
							/* <Key value="shift" onClick={() => handleShiftKey()} />
							<Key value="enter" onClick={() => handleRegularKey('\n')} />
							<Key value="caps lock" onClick={() => handleShiftKey()} /> */

						}
					</div>

					<Toolbar
						currentStyle={currentStyle}
						setCurrentStyle={setCurrentStyle}
						// applyGlobalStyleChange={applyGlobalStyleChange}
						handleLanguageChange={handleLanguageChange}
						handleAddSymbol={handleAddSymbol}
						handleEmojiSymbol={handleEmojiSymbol}
						handleClearSymbol={handleClearSymbol}
						applyGlobalStyleChange={applyGlobalStyleChange}
					/>

				</div>

			</div>

		</div>
			
	
	)

}



