// ImageCard.js
import React, { useState } from 'react';
import '../css/FourActions.css';
import Action from './Action';

const FourActions = ({nextTurn, style}) => {

    const [disabledActions, setDisabledActions] = useState(false); 

    const actions = [ 
        { action: 'plus', actionPath: '/img/actions/plus.png' },
        { action: 'minus', actionPath: '/img/actions/minus.png' },
        { action: 'mult', actionPath: '/img/actions/mult.png' },
        { action: 'divide', actionPath: '/img/actions/divide.png' },
        
    ]

    const handleActionClick = (action) => {
        if (disabledActions) {
            return;  // Ignore the click
        }
      
        setDisabledActions(true); 
        nextTurn(action); 
        setTimeout(() => {
            setDisabledActions(false);
        }, 2500);

    };

    //const handleActionClick = (action) => { console.log(action)};
    return (
        <div style={style} className="actions-container">
            {actions.map((action, index) => (
                    <Action 
                        isDisabled={disabledActions}
                        key={index} 
                        action={action.action}
                        actionPath={action.actionPath}
                        handleActionClick={handleActionClick}
                    />
                ))}
        </div>
    );
};

export default FourActions;
