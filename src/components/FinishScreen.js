function FinishScreen({ points, totalPoints, highscore, dispatch }) {
  const prencetage = (points / totalPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(prencetage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
