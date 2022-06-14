import React from "react";

function Button({ value, onClick, isWinningButton}) {
    return (
        <button className={`btn ${isWinningButton?'winning':''} ${value==='X'?'text-green':'text-orange'}`} onClick={onClick}>
            {value}
        </button>
    )
};

export default Button;