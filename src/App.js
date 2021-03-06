import React, { useState } from "react";
import Background from "./Components/background";
import Board from "./Components/Board/Board";
import History from "./Components/History";
import Status from "./Components/status";
import { calculateWinner } from "./winner";

const START_GAME = [{ board: Array(9).fill(null), isNextX: true }];

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNextX: true },
  ]);

  const [currentMove, setcurrentMove] = useState(0);

  const current = history[currentMove]; //Storing the last move state into current variable

  const { winner, winningCombination } = calculateWinner(current.board);

  const handleButtonClick = (position) => {
    if (current.board[position] || winner) return;

    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isNextX ? "O" : "X";
        }

        return square;
      });

      return prev.concat({ board: newBoard, isNextX: !last.isNextX });
    });

    setcurrentMove((prevMove) => prevMove + 1);
  };

  const moveTo = (move) => {
    setcurrentMove(move);
  };

  function startNewGame() {
    setHistory(START_GAME);
    setcurrentMove(0);
  }

  // in the handleButtonCLick()-:)
  // the setBoard() returns the state of each button using the array "prev"(or you can say returns the array of new state)
  // after using the map function on it to set the state of a particular button to X.
  // the pos parameter is the position of element that is being traversed by the map function.

  return (
    <div className="app">
      <Background />
      <h1 className={`text-transform`}>
        Tic <span className={`text-green`}>Tac </span> Toe{" "}
      </h1>
      <div className="board-bg">
        <Status winner={winner} current={current} />
        <Board
          board={current.board}
          handleButtonClick={handleButtonClick}
          winningCombination={winningCombination}
        />
        <button
          type="button"
          onClick={startNewGame}
          className={`btn-reset ${winner ? "active" : " "}`}
        >
          Start a new game
        </button>
        <h2 style={{ fontWeight: "normal", textAlign:"center" }}>Current Game History</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
        <div className="bg-balls"></div>
    </div>
  );
}

export default App;
