import React from "react";

function Button({ value, onClick, isWinningButton}) {
    return (
        <button className="btn" onClick={onClick} style={{fontWeight:isWinningButton?`bold`:`normal`}}>
            {value}
        </button>
    )
};

export default Button;