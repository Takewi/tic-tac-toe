import { TicTacToe } from "./components/TicTacToe";
import "./App.css";
import { useState } from "react";

function App() {
  const randomizeInitialLetter = () => {
    let data = ["X", "O"];
    return data[Math.floor(Math.random() * data.length)];
  };
  const [letter, setLetter] = useState(randomizeInitialLetter());
  const [values, setValues] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(undefined);

  const handleOnReset = () => {
    setWinner(undefined)
    setValues(Array(9).fill(""))
  }
  return (
    <div id="app">
      <h1>TicTacToe</h1>
      <h2 className="turn">
        Player turn: <b>{letter}</b>
      </h2>
      <button onClick={handleOnReset}>Reset Game</button>
      <TicTacToe
        letter={letter}
        setLetter={setLetter}
        setWinner={setWinner}
        values={values}
        setValues={setValues}
      />
      <h2>
        Made by{" "}
        <a
          rel="noreferrer"
          target={"_blanck"}
          href="https://portfolio-takewi.vercel.app/"
        >
          Gawi_
        </a>
      </h2>
      {winner ? (
        <h2 id="winner">
          Player <b>{winner}</b> wins!
        </h2>
      ) : null}
    </div>
  );
}

export default App;
