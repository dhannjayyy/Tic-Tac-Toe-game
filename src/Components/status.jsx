import React from "react";

function Status({winner,current}){

    const boardFull = current.board.every((el)=>{
        return el? true:false;
    })

    return (
        <h2>
        {winner && `Winner is ${winner}`}
        {!winner && !boardFull && `Next Turn : ${current.isNextX ? "O" : "X"}`}
        {!winner && boardFull && `Its a tie`}
        </h2>
    )
};

export default Status;