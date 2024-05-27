import React from "react";
import "../css/podium.css";
import Winner from "./winner";

const Podium = ({ Games, Visible }) => {

    function findTopThreePlayers(games) {
        // Sort the array based on the num_of_steps in ascending order
        games.sort((a, b) => a.num_of_steps - b.num_of_steps);

        if(games.length <= 3)
            return games;
    
        // Slice the first three elements of the array to get the top three players with the lowest steps
        return games.slice(0, 3);
    }

    console.log('Games:', Games);

    var topThreePlayers = [];
    if(Games)
        {
        topThreePlayers = findTopThreePlayers(Games);
        }

        console.log('topThreePlayers:', topThreePlayers);


    return (
        <div className="podium-container" style={{display: Visible? 'flex': 'none'}} >

            <img src='/img/podium.png' alt='podium' className='podium-img'/>
            <div className="podium-prices">
            <Winner Price="first" Name={topThreePlayers[0] ? topThreePlayers[0].player_name : "אין"} Img={topThreePlayers[0] ? topThreePlayers[0].player_img : ""} />
            <Winner Price="second" Name={topThreePlayers[1] ? topThreePlayers[1].player_name : "אין"} Img={topThreePlayers[1] ? topThreePlayers[1].player_img : ""} />
            <Winner Price="third" Name={topThreePlayers[2] ? topThreePlayers[2].player_name : "אין"} Img={topThreePlayers[2] ? topThreePlayers[2].player_img : ""} />
            
            <div className="horizontal-container">
            <div className="player-steps">{topThreePlayers[1]? topThreePlayers[1].num_of_steps: "0"} steps</div>
            <div className="player-steps">{topThreePlayers[0]? topThreePlayers[0].num_of_steps: "0"} steps</div>
            <div className="player-steps">{topThreePlayers[2]? topThreePlayers[2].num_of_steps: "0"} steps</div>
            </div>
            </div>
                {/* <div className="podium-first">
                    {Games[0] ? Games[0].name : "אין"}
                </div>
                <img src={Games[0] ? Games[0].img : ""} className="podium-first-img" />
                <div className="podium-second">
                    {Games[1] ? Games[1].name : "אין"}
                </div>
                <div className="podium-third">
                    {Games[2] ? Games[2].name : "אין"}
                </div> */}
        </div>
    );
};

export default Podium;