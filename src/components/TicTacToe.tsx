import { Td } from "./Td";
import "./css/TicTacToe.css"

export const TicTacToe = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Td num={0} />
            <Td num={1} />
            <Td num={2} />
          </tr>
          <tr>
            <Td num={3} />
            <Td num={4} />
            <Td num={5} />
          </tr>
          <tr>
            <Td num={6} />
            <Td num={7} />
            <Td num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
