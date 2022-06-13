import React from "react";

function History({ history, moveTo, currentMove }) {
    return (
        <ul>
            {history.map((_, move) => {
                return (
                    <li>
                        <button
                            key={move}
                            onClick={() => {
                                moveTo(move);
                            }}
                            style={{ fontWeight: move === currentMove ? `bold` : `normal` }}
                        >
                            {move === 0 ? `Go to Game Start` : `Go to move #${move}`}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default History;
