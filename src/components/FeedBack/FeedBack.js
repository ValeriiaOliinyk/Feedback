import React from "react";

const FeedBack = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onGood,
  onNeutural,
  onBad,
}) => {
  return (
    <>
      <h1>Please live feedback</h1>
      <div>
        <button onClick={() => onGood()}>Good</button>
        <button onClick={() => onNeutural()}>Neutural</button>
        <button onClick={() => onBad()}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutural: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};

export default FeedBack;
