import React from "react";

const Result = ({ score, playAgain }) => {
  return (
    <div className="scoreBoard">
      <div className="score">You scored {score} / 5 correct answers!</div>
      <button className="playAgainBtn" onClick={playAgain}>
        Play Again!
      </button>
    </div>
  );
};

export default Result;
