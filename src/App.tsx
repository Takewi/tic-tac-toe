import { TicTacToe } from "./components/TicTacToe";
import "./App.css";

function App() {
  return (
    <div
      id="app"
      className="d-flex align-items-center flex-column text-center"
    >
      <h1>TicTacToe</h1>
      <TicTacToe />
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
    </div>
  );
}

export default App;
