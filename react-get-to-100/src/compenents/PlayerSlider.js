import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import '../css/PlayerSlider.css';

const PlayerSlider = ({ players, currentPlayer, transitionDirection }) => {

    //const [currentIndex,setCurrentIndex] = useState(currentPlayer);

    function getFiveNumbers(arr, targetIndex) {

        let result = [];
        let n = arr.length;

        // Check if the array has less than 5 elements
        if (n < 5) {
            return arr.slice(); // Return a copy of the entire array if less than 5 elements
        }

        // Calculate the start index for the sequence
        let startIndex = targetIndex - 2;

        for (let i = 0; i < 5; i++) {
            // Calculate the index considering wrapping around using modulo
            let index = (startIndex + i + n) % n;
            result.push(arr[index]);
        }

        return result;
    }

    //const [visiblePlayers, setVisiblePlayers] = useState(getFiveNumbers(players, currentPlayer));

    var visiblePlayers = [];
    //const [currentIndex,setCurrentIndex] = useState(0);
    if(players.length > 0)
        visiblePlayers = getFiveNumbers(players, currentPlayer);
      //setVisiblePlayers(getFiveNumbers(players.Players, currentPlayer));

    //console.log('visiblePlayersNow:', visiblePlayers);

    // Update visiblePlayers whenever players or currentPlayer changes
    // useEffect(() => {
    //     if (players.length > 0) {
    //         setVisiblePlayers(getFiveNumbers(players, currentPlayer));
    //     } else {
    //         setVisiblePlayers([]); // Clear visiblePlayers if players is empty
    //     }
    // }, [players, currentPlayer]); // Dependencies array
    // const handlePrev = () => {
    //     if (currentIndex > 0) {
    //         setTransitionDirection('shrinking');
    //         setTimeout(() => {
    //             setTransitionDirection('none');
    //             setCurrentIndex(currentIndex - 1);
    //             setTransitionDirection('growing');
    //             setTimeout(() => {
    //                 setTransitionDirection('none');
    //             }, 500);
    //         }, 500);


    //     }
    // };

    // const handleNext = () => {
    //     if (currentIndex < players.length - 5) {
    //         setTransitionDirection('shrinking');
    //         setTimeout(() => {
    //             setTransitionDirection('none');
    //             setCurrentIndex(currentIndex + 1);
    //             setTransitionDirection('growing');
    //             setTimeout(() => {
    //                 setTransitionDirection('none');
    //             }, 500);
    //         }, 500);
    //     }
    // };

    // const handleImageClick = (img) => {
    //     setPlayerCardSelected(img);
    // };

    return (
        <div className="player-slider-container">
            {/* <button onClick={handlePrev}>
                <img src="/img/leftArrow.png" alt="&lt;" style={{ display: currentIndex === 0 ? 'none' : 'block' }} />
            </button> */}
            <div className="player-slider">
                 {visiblePlayers.map((player, index) => (
                     <PlayerCard
                         key={index}
                         src={ player.profile_img }
                         className={`${transitionDirection} ${players[currentPlayer] === player ? 'selected-player' : 'side-player'}`}
                         // onClick={() => handleImageClick(player)}
                         playerName={player.name}
                         playerNum={player.current_num}
                         playerSteps={player.current_steps}
                         color={player.serial_num%4}
                     />
                 ))}
             </div>

            {/* <button onClick={handleNext}>
                <img src="/img/rightArrow.png" alt="&gt;" style={{ display: currentIndex >= players.length - 5 ? 'none' : 'block' }} />
            </button> */}
        </div>
    );
};

export default PlayerSlider;
