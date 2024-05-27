// App.js
import React, { useState } from 'react';
import './App.css';
import GameBoard from './compenents/GameBoard';
import Subscribe from './compenents/Subscribe';
import Podium from './compenents/podium';
import Header from './compenents/Header';
import { setCounterZero } from './counter';


function App() {

  var [Players, SetPlayers] = useState(JSON.parse(localStorage.getItem('players')));
  if (!Players) {
    Players = [];
  }

  const addPlayer = (newPlayer) => {

    var sameName = Players.filter(p => p.name === newPlayer.name);
    if (sameName > 0) {

    }

      const updatedPlayers = [...Players, newPlayer];
      SetPlayers(updatedPlayers);
      localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    const deletePlayer = (playerId) => {
      const updatedPlayers = Players.filter(player => player.serial_num !== playerId);
      if(updatedPlayers.length === 0){
        setCounterZero();
        SetSubscribeVisible(true);
      }
      SetPlayers(updatedPlayers);
      localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    const handleSetPlayers = (updatedPlayers) => {
      SetPlayers(updatedPlayers);
      localStorage.setItem('players', JSON.stringify(updatedPlayers));
    }

    const [Games, SetGames] = useState(JSON.parse(localStorage.getItem('games')) || []);
    
    const [ShowPodium, SetShowPodium] = useState(false);
    const [SubscribeVisible, SetSubscribeVisible] = useState(true);


    const handleSetShowPodium = () => {
      SetShowPodium(!ShowPodium);
    }

    const handleStartNewGame = () => {
      localStorage.setItem('games', JSON.stringify([]));
      localStorage.setItem('players', JSON.stringify([]));
      setCounterZero();
      SetPlayers([]);
      SetGames([]);
      SetSubscribeVisible(true);

    }



    // background-image

    return (
      <div className="App">
        <Header ShowPodium={handleSetShowPodium} AddNewPlayer={SetSubscribeVisible} StartNewGame={handleStartNewGame} />
        <Podium Games={Games} Visible={ShowPodium} />
        <Subscribe addPlayer={addPlayer} SubscribeVisible={SubscribeVisible} SetSubscribeVisible={SetSubscribeVisible}/>
        <GameBoard Players={Players} handleSetPlayers={handleSetPlayers} deletePlayer={deletePlayer} Games={Games} SetGames={SetGames}/>    
      </div>
    );
  }


export default App;
