import React from "react";
import PropTypes from "prop-types";
import { button, box } from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={box}>
    {options.map((option) => (
      <button
        type="button"
        name={option}
        key={option}
        onClick={onLeaveFeedback}
        className={button}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.protoTypes = {
  options: PropTypes.node.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
