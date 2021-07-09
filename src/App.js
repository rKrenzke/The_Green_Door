import { useState } from "react";
import "./App.css";
import Guess from "./Components/Guess/Guess";
import GuessLog from "./Components/GuessLog/GuessLog";

function App() {
  const [correctArray, setCorrectArray] = useState([]);

  const correctGuess = (answer) => {
    setCorrectArray(prevArray => {
      return [answer, ...prevArray]});
  };

  return (
    <div className="App">
      <Guess addAnswer={correctGuess} />
      <GuessLog correct={correctArray} />
    </div>
  );
}

export default App;
