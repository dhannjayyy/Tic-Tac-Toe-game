import React from "react";

function Status({ winner, current }) {

    const boardFull = current.board.every((el) => {
        return el ? true : false;
    })

    return (
        <h2 className="status-message text-transform">
            {winner && (<>Winner is {" "}
                <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                    {winner}
                </span>
            </>)}
            {!winner && !boardFull && (<>Next Turn : {" "}
                <span className={current.isNextX?'text-orange':'text-green'}>
                    {current.isNextX ? "O" : "X"}
                </span>
            </>)}
            {!winner && boardFull && (
                <>
                <span className="text-green">X</span> AND <span className="text-orange">Y</span> ARE TIED
                </>
            )}
        </h2>
    )
};

export default Status;