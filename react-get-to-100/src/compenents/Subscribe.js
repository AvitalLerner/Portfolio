// ImageCard.js
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import '../css/Subscribe.css';
import { getCounter, incrementCounter } from '../counter';

const Subscribe = ({ addPlayer, SubscribeVisible, SetSubscribeVisible }) => {

    const [imageCardSelected, setImageCardSelected] = useState(null);

    const handleImageClick = (img) => {
        setImageCardSelected(img);
    };

    const handleAddPlayer = () => {
        if (imageCardSelected===null){
            alert('בחר תמונה לשחקן');
            return;
        }    
        const Name = document.querySelector('input').value    
        if (Name===''){
            alert('הכנס שם שחקן');
            return;
        }
        else{
            const player = {
                    serial_num: getCounter(),
                    name: Name,
                    current_num: Math.floor(Math.random() * (100)) + 1,
                    current_steps: 0,
                    profile_img: imageCardSelected,
            };
            addPlayer(player);
            incrementCounter();
            document.querySelector('input').value = '';
            setImageCardSelected(null);
            alert('השחקן נוסף בהצלחה');

        }
    }

    const handleGoToPlay = () => {
        SetSubscribeVisible(false);
    }


    const images = [
        '/img/profiles/profile (1).png',
        '/img/profiles/profile (2).png',
        '/img/profiles/profile (3).png',
        '/img/profiles/profile (4).png',
        '/img/profiles/profile (5).png',
        '/img/profiles/profile (6).png',
        '/img/profiles/profile (7).png',
        '/img/profiles/profile (8).png',
        '/img/profiles/profile (9).png',
        '/img/profiles/profile (10).png',
        '/img/profiles/profile (11).png',
        '/img/profiles/profile (12).png',
        '/img/profiles/profile (13).png',
        '/img/profiles/profile (14).png',
      ];

      console.log('bla');
      console.log('counter', getCounter());

      
    return (
        <div className="subscribe-background" dir='rtl' style={{display: SubscribeVisible ? 'flex': 'none'}}>

        <div className="subscribe-container">
            <img src="/img/logo.png" alt="logo" className="subscribe-logo" />
            <div className="subscribe-input">
                <input type="text" placeholder="רשום את שם השחקן שלך כאן" />
            </div>
            <div className='subscribe-select-image'>בחר שחקן:</div>
            <div dir='ltr'>
            <ImageSlider images={images} imageCardSelected={imageCardSelected} onClick={handleImageClick} />
            </div> 
            <div className='button-container'>
            <button className='option-button add-player-button' onClick={handleAddPlayer}>הוסף שחקן</button>
            <button disabled={getCounter() === 0} className='option-button subscribe-button'  onClick={handleGoToPlay}>התחל לשחק</button>
            </div>
        </div>
        </div>
    );
};

export default Subscribe;
