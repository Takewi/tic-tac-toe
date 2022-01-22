import "./css/TicTacToe.css";
import { wins } from "../utils";

export const TicTacToe = ({
  letter,
  setLetter,
  setWinner,
  values,
  setValues
}: {
  letter: string;
  values: any[];
  setValues: React.Dispatch<React.SetStateAction<any[]>>;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  setWinner: React.Dispatch<React.SetStateAction<undefined>>;
}) => {

  const checkForWinner = (valuesCopy: typeof values) => {
    for (let win in wins) {
      wins[win].forEach((pattern: any) => {
        if (
          valuesCopy[pattern[0]] === "" ||
          valuesCopy[pattern[1]] === "" ||
          valuesCopy[pattern[2]] === ""
        ) {
          // Nothing
        } else if (
          valuesCopy[pattern[0]] === valuesCopy[pattern[1]] &&
          valuesCopy[pattern[1]] === valuesCopy[pattern[2]]
        ) {
          setWinner(valuesCopy[pattern[0]]);
        }
      });
    }
  };

  const handleOnClick = (index: number) => {
    if (values[index] !== "") return console.log("Já foi clicado");
    const valuesCopy = [...values];
    valuesCopy[index] = letter;
    checkForWinner(valuesCopy)
    setValues(valuesCopy);
    letter === "X" ? setLetter("O") : setLetter("X");
  };

  return (
    <table>
      <tbody>
        <tr>
          <td onClick={() => handleOnClick(0)}>{values[0]}</td>
          <td onClick={() => handleOnClick(1)}>{values[1]}</td>
          <td onClick={() => handleOnClick(2)}>{values[2]}</td>
        </tr>
        <tr>
          <td onClick={() => handleOnClick(3)}>{values[3]}</td>
          <td onClick={() => handleOnClick(4)}>{values[4]}</td>
          <td onClick={() => handleOnClick(5)}>{values[5]}</td>
        </tr>
        <tr>
          <td onClick={() => handleOnClick(6)}>{values[6]}</td>
          <td onClick={() => handleOnClick(7)}>{values[7]}</td>
          <td onClick={() => handleOnClick(8)}>{values[8]}</td>
        </tr>
      </tbody>
    </table>
  );
};
