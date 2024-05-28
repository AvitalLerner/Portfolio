
import React, { useState } from 'react';
import './keyboard.css';
import Key from './key';
import Screen from './screen';
import Toolbar from './toolbar';


export default function Keyboard() {

	const [styledText, setStyledText] = useState([]);
	const [currentStyle, setCurrentStyle] = useState({ color: 'Black', font: 'Arial', fontSize: '16' });
	const [language, setLanguage] = useState('english');
	const [lastAct, setLastAct] = useState({ type: null, content: null });
	const [keyboardState, setKeyboardState] = useState('lowerCase');
	

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

	const specialKeys = [
		'shift', 'space', 'enter', 'delete'
	];

	const numbers = [
		'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
	];

	const Emoji = [
		'😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
		'😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😛', '😝',
		'😜', '😎', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '😣',
	]


	const handleKeyClick = (key) => {

		switch (key) {
			case 'shift':
				handleShiftKey();
				break;
			case 'space':
				handleSpaceKey();
				break;
			case 'enter':
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
		if (styledText.length > 0) {
			setLastAct({ type: 'delete', content: styledText[styledText.length - 1] });
			let updatedText = styledText.slice(0, -1);
			setStyledText(updatedText);
		}
	}
	const handleEnterKey = () => {
		setLastAct({ type: 'add', content: null });
		let newStyledText = [...styledText, { text: "\n", style: currentStyle }];
		setStyledText(newStyledText);
	};

	const handleShiftKey = () => {
		var updatedState = keyboardState;
		setLastAct({ type: 'updatedState', content: updatedState });
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

	const applyGlobalStyleChange = () => {
		setLastAct({ type: 'changeGlobal', content: styledText });
		const updatedText = styledText.map(part => ({
			...part,
			style: { ...currentStyle }
		}));
		setStyledText(updatedText);
	};


	const handleSpaceKey = () => {
		setLastAct({ type: 'add', content: { text: ' ', style: null } });

		let newStyledText = [...styledText, { text: ' ', style: currentStyle }];
		setStyledText(newStyledText);
	};

	const handleRegularKey = (key) => {
		setLastAct({ type: 'add', content: null });
		let newStyledText = [...styledText, { text: key, style: currentStyle }];
		setStyledText(newStyledText);
		if (keyboardState === 'oneUpperCase') {
			setKeyboardState('lowerCase');
		}
	};

	const handleLanguageChange = (language) => {
		setLastAct({ type: 'updatedState', content: keyboardState });
		if (language === 'english') {
			setKeyboardState('lowerCase');
		} else {
			setKeyboardState(language);
			setLanguage(language);
		}
	};

	const handleAddSymbol = () => {
		let updatedState = keyboardState;
		setLastAct({ type: 'updatedState', content: updatedState });
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

	const handleUndo = () => {
		if (lastAct) {
			switch (lastAct.type) {
				case 'delete':
					setStyledText([...styledText, lastAct.content]);
					break;
				case 'add':
					handleDeleteKey();
					break;
				case 'changeGlobal':
					setStyledText(lastAct.content);
					break;
				case 'updatedState':
					setKeyboardState(lastAct.content);
					break;
				case 'clear':
					setStyledText(lastAct.content);
					break;
					
				default:
					break;
			}
			setLastAct(null);
		}
	}

	const handleEmojiSymbol = () => {
		let updatedState = keyboardState;
		setLastAct({ type: 'updatedState', content: updatedState });
		if (updatedState === 'Emoji') {
			updatedState = 'lowerCase';
		}
		else {
			updatedState = 'Emoji';
		}
		setKeyboardState(updatedState);
	}
	const handleClearSymbol = () => {
		setLastAct({ type: 'clear', content: styledText });
		setStyledText([]);
	}
	

	const returnKeyValues = () => {
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
			<Toolbar
				currentStyle={currentStyle}
				setCurrentStyle={setCurrentStyle}
				// applyGlobalStyleChange={applyGlobalStyleChange}
				handleLanguageChange={handleLanguageChange}
				handleAddSymbol={handleAddSymbol}
				handleEmojiSymbol={handleEmojiSymbol}
				handleClearSymbol={handleClearSymbol}
				applyGlobalStyleChange={applyGlobalStyleChange}
				keyboardState={keyboardState}
				language={language}
				handleUndo={handleUndo}
			/>
			<div className="keyboardcontainer">
				<Screen styledText={styledText} myDir={keyboardState === 'hebrew' ? 'rtl' : 'ltr'} />



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
				</div>
			</div>
		</div>
	);
}
