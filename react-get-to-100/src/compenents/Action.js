// ImageCard.js
import React from 'react';
import '../css/Action.css';

const Action = ({ action, actionPath, handleActionClick }) => {
    return (
        <div className="action-container"  id={action} onClick={()=>{handleActionClick(action);}}>
            <img src={actionPath} alt={action}/>
        </div>
    );
};

export default Action;
