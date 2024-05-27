import React, { useState } from 'react';
import { incrementCounter, decrementCounter, getCounter } from '../counter';

//import './GameBoard.css';
import FourActions from './FourActions';
import PlayerSlider from './PlayerSlider';
import GotHundred from './GotHundred';

function GameBoard({ Players, handleSetPlayers, deletePlayer, Games, SetGames }) {


    if (!Players) {
        console.log('No players found in local storage');
    }

    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState('none'); // none, shrinking, growing

    const [isHundred, setIsHundred] = useState(false);

    const addGame = (game) => {
        const updatedGames = [...Games, game];
      SetGames(updatedGames);
      localStorage.setItem('games', JSON.stringify(updatedGames));
    }

    const handleWon = () => {
        const game = {
            player_name: Players[currentPlayer].name,
            num_of_steps: Players[currentPlayer].current_steps,
            player_img: Players[currentPlayer].profile_img,
        };
        addGame(game);
        setIsHundred(true);
    };

    const changeNum = (action) => {
        console.log('action:', action);
        const updatedPlayers = [...Players];

        switch (action) {
            case "divide":
                updatedPlayers[currentPlayer].current_num = Math.floor(updatedPlayers[currentPlayer].current_num / 2);
                break;
            case "mult":
                updatedPlayers[currentPlayer].current_num *= 2;
                break;
            case "plus":
                updatedPlayers[currentPlayer].current_num += 1;
                break;
            case "minus":
                updatedPlayers[currentPlayer].current_num -= 1;
                break;
            default:
                console.log("error");
        }

        updatedPlayers[currentPlayer].current_steps += 1;

        handleSetPlayers(updatedPlayers);

        return updatedPlayers[currentPlayer].current_num;
        //if(updatedPlayers[currentPlayer].current_num === 100)
        //   handleWon();
    };


    const nextTurn = (action) => {

        const num = changeNum(action);
        if (num === 100) {
            console.log('you won');
            handleWon();
            return;
        }

        animationOfNextTurn(currentPlayer);

    };

    const animationOfNextTurn = (serial_num) => {
        setTimeout(() => {
            setTransitionDirection('shrinking');
            setTimeout(() => {
                setTransitionDirection('none');
                if (serial_num === Players.length - 1)
                    setCurrentPlayer(0);
                else
                    setCurrentPlayer(serial_num + 1);
                setTransitionDirection('growing');
                setTimeout(() => {
                    setTransitionDirection('none');
                }, 500);
            }, 500);
        }, 2000);
    }

    // const SetCurrentPlayerDisable = () => {
    //     const updatedPlayers = [...Players];
    //     updatedPlayers[currentPlayer].disabled = true;
    //     handleSetPlayers(updatedPlayers);
    // }

    const DeleteCurrentPlayer = () => {
        deletePlayer(Players[currentPlayer].serial_num);
        setIsHundred(false);
        animationOfNextTurn(currentPlayer);
    }

    const RestartNumber = () => {
        const updatedPlayers = [...Players];
        updatedPlayers[currentPlayer].current_num = Math.floor(Math.random() * (100)) + 1;
        updatedPlayers[currentPlayer].current_steps = 0;
        handleSetPlayers(updatedPlayers);
        setIsHundred(false);
        animationOfNextTurn(currentPlayer);
    }


    //console.log('currentPlayerSteps:', Players[currentPlayer].current_steps);

    //var current_player = players.find(p => p.serial_num === 1);

    return (
        <div className="game-board">
            <GotHundred Steps={Players[currentPlayer]?.current_steps} Name={Players[currentPlayer]?.name} style={{ display: isHundred ? 'block' : 'none' }} DeleteCurrentPlayer={DeleteCurrentPlayer} RestartNumber={RestartNumber} />
            <FourActions nextTurn={nextTurn} style={{ display: isHundred ? 'none' : 'flex' }} />
            <PlayerSlider players={Players} currentPlayer={currentPlayer} transitionDirection={transitionDirection} />
        </div>
    );
}

export default GameBoard;