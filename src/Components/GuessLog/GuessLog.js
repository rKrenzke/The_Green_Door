const GuessLog = (props) => {
//mapping through the array of correct answers and returning a list item tag for each answer
  const guessMapper = props.correct.map((correct) => {
    return <li key={Math.random()}>{correct}</li>;
  });

  return (
    <div>
      <ul>{guessMapper}</ul>
    </div>
  );
};

export default GuessLog;
