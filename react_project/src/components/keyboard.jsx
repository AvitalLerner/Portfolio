
import React, { useState } from 'react';
import './keyboard.css';
import Key from './key';
import Screen from './screen';


export default function Keyboard() {


	const [inputText, setInputText] = useState('');
	const [keyboardState, setKeyboardState] = useState('lowerCase');
	const [colorText, setColor] = useState('Black');
	const [fontText, setFont] = useState('Arial');

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
		let updatedText = inputText.slice(0, -1);
		setInputText(updatedText);
	}
	const handleEnterKey = () => {
		let updatedText = inputText + '\n';
		console.log('Enter');
		console.log(updatedText);
		setInputText(updatedText);

	}

	const handleShiftKey = () => {

		var updatedState = keyboardState;
		if (updatedState === 'lowerCase') {
			updatedState = 'oneUpperCase';
		}
		else if (updatedState === 'oneUpperCase') {
			updatedState = 'manyApperCase';
		}
		else// if (updatedState === 'manyApperCase') 
			{
			updatedState = 'lowerCase';
		}

		setKeyboardState(updatedState);
	}

	const handleSpaceKey = () => {
		let updatedText = inputText + ' ';
		setInputText(updatedText);
	}
	const handleRegularKey = (key) => {
		let updatedText = inputText + key;
		setInputText(updatedText);
		if(keyboardState ==='oneUpperCase'){
			setKeyboardState('lowerCase');
		}
	};

	const handleLanguageChange = (e) => {
		if (e.target.value === 'english') {
			setKeyboardState('lowerCase');
		}
		else {
			setKeyboardState(e.target.value);
		}
	}

	const handleColorChange = (e) => {
		setColor(e.target.value);
	}

	const hendleFontChange = (e) => {
		setFont(e.target.value);
	}

	const handleAddSymbol = () => {
		let updatedState = keyboardState;
		if (updatedState === 'symbols') {
			updatedState = 'lowerCase';
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
		setInputText('');
	}
	const specialKeys = [
		'Ctrl', 'Space', 'Shift', 'Enter', 'delete'
	];

	const numbers = [
		'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
	];

	const tools = [
		'language', 'color', 'font', 'size', 'bold', 'italic', 'underline', 'align', 'list', 'undo', 'redo'
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
		const upperCase = [
			'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
			'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
			'Z', 'X', 'C', 'V', 'B', 'N', 'M'
		];
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
			// case '':
			// 	return upperCase;

			default:
				return lowerCase;
		}


	}


	return (

		<div className="keyboard">
			<Screen inputText={inputText} colorText={colorText} fontText={fontText}/>

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

					<div className="row tools">

						<div className="dropdown-content">
							<select value="language" onChange={handleLanguageChange}>
								<option value="English">English</option>
								<option value="hebrew">hebrew</option>
								<option value="French">French</option>
								<option value="German">German</option>
							</select>

							<select value="color" onChange={handleColorChange}>
								<option value="Black">Black</option>
								<option value="Red">Red</option>
								<option value="Blue">Blue</option>
								<option value="Green">Green</option>
							</select>

							<select value="font" onChange={hendleFontChange}>
								<option value="Arial">Arial</option>
								<option value="Times New Roman">Times New Roman</option>
								<option value="Courier New">Courier New</option>
								<option value="Verdana">Verdana</option>
							</select>

							<button onClick={handleAddSymbol}>Add Symbol</button>
							<button onClick={handleEmojiSymbol}>Emoji</button>
							{/* <button onClick={}>A</button> */}
							<button onClick={handleClearSymbol}>clear</button>



						</div>

					</div>

				</div>
			</div>
		</div>
	)

}



