import React, { useState } from "react";
import Button from "../Button/Button";
// import "./Board.scss";



function Board() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isNextX, setIsNextX] = useState(false);

    const handleButtonClick = (position) =>{
        if(board[position])
        return;

        setBoard((prev)=>{
            return prev.map((square,pos)=>{
                if(pos === position){
                    return isNextX ? 'O':'X';
                }

                return square;
            });
        });

        setIsNextX(prev=>!prev) //Inverse the value of isNextX
    };

// in the handleButtonCLick()-:)
// the setBoard() returns the state of each button using the array "prev"(or you can say returns the array of new state)
// after using the map function on it to set the state of a particular button to X. 
// the pos parameter is the position of element that is being traversed by the map function.


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