import React from "react";

function History({ history, moveTo, currentMove }) {
    return (
        <div className="history-wrapper">
            <ul className="history">
                {history.map((_, move) => {
                    return (
                        <li>
                            <button
                                key={move}
                                onClick={() => {
                                    moveTo(move);
                                }}
                                className={`btn-move ${move === currentMove?'active':''}`}
                            >
                                {move === 0 ? `Go to Game Start` : `Go to move #${move}`}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default History;
