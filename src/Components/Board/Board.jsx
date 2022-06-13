import React from "react";
import Button from "../Button/Button";



function Board({board,handleButtonClick}) {
    function renderButton(position) {
        return (
            <Button
                value={board[position]}
                onClick={() => handleButtonClick(position)}
            />
        )
    };

    return (
        <div className="board">
          <div className="row row-1">
            {renderButton(0)}
            {renderButton(1)}
            {renderButton(2)}
          </div>
          <div className="row row-2">
            {renderButton(3)}
            {renderButton(4)}
            {renderButton(5)}
          </div>
          <div className="row row-3">
            {renderButton(6)}
            {renderButton(7)}
            {renderButton(8)}
          </div>
        </div>
    );
};

export default Board;