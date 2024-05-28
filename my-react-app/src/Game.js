import Board from "./Board";
import Info from "./info";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");
  const [playerTurn, setPlayerTurn] = useState("X");
  const [boardState, setBoardState] = useState(Array(9).fill(null));

  useEffect(() => {
    const checkWinner = () => {
      const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
          setWinner(boardState[a]);
          return;
        }
      }

      if (boardState.every(square => square !== null)) {
        setWinner("Tie");
      } else {
        setWinner(""); // Reset winner when there's no winner
        setPlayerTurn(prevPlayerTurn => prevPlayerTurn === "X" ? "O" : "X");
      }
    };

    checkWinner();
  }, [boardState]);

  const resetBoard = () => {
    if (winner !== "") {
      // If there's a winner, set the next player as the starting player
      setPlayerTurn(winner === "X" ? "O" : "X");
    } else {
      // If there's no winner, start with the opposite player
      setPlayerTurn(playerTurn === "X" ? "O" : "X");
    }
    setReset(true);
    setWinner("");
    setBoardState(Array(9).fill(null));
  };

  return (
    <div className="app-container" style={{ backgroundColor: 'black' }}>
      <header>
        <h1>Tic Tac Toe</h1>
        <div className="player-turn">Current Turn: {playerTurn}</div>
      </header>
      <main>
        <div className="game-container">
          {winner && ( // Only display winner message when there's actually a winner
            <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
              <div className="winner-text">{winner === "Tie" ? "It's a tie!" : ` ${winner} `}</div>
              <button onClick={() => resetBoard()}>Reset Board</button>
            </div>
          )}
          <Board
            reset={reset}
            setReset={setReset}
            winner={winner}
            setWinner={setWinner}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
            boardState={boardState}
            setBoardState={setBoardState}
          />
          <Info />
        </div>
      </main>
    </div>
  );
}

export default App;
