import React from "react";
import "../css/winner.css";

const Winner = ({ Name, Img, Price }) => {

    Name = Name ? Name : "אין";
    Img = Img ? Img : "/img/profiles/profile (2).png";
    return (
        <div className="winner-container" id= {Price}>
            <div className="winner-text">{Name}</div>
            <img src={Img} alt={Name} className="winner-img" />
        </div>
    );
}



export default Winner;
