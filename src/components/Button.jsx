import React from "react";
import '../stylesheets/Button.css'

function Button({ text, clickButton, manageClick }){
    return(
        <button
            className={ clickButton ? 'button-click' : 'button-restart' }
            onClick={manageClick}>
            {text}
        </button>
    );
}

export default Button