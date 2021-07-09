import { useState } from "react";

const Guess = (props) => {
  const [answer, setAnswer] = useState("");

  //function to update the 'answer' state as user inputs characters
  const answerHandler = (event) => {
    setAnswer(event.target.value);
  };

  //function to determine if the answer is correct (includes double-letters)
  const validator = () => {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === answer[i + 1]) {
        props.addAnswer(answer);
        setAnswer("");
        console.log("CORRECT");
        return
      } 
    }
    wrongAnswerHandler();
    setAnswer("");
  };

  const wrongAnswerHandler = () => {
    console.log("WRONG");
  };

  return (
    <div>
      <input
        type="text"
        spellCheck="true"
        value={answer}
        onChange={answerHandler}
      />
      <button onClick={validator}>Send Through The Door</button>
    </div>
  );
};

export default Guess;
