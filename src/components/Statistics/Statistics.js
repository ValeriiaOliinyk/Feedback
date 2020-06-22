import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <>
    <ul className={styles.list}>
      <li className={styles.item}>Good: {good}</li>
      <li className={styles.item}>Neutural: {neutral}</li>
      <li className={styles.item}>Bad: {bad}</li>
      <li className={styles.item}>Total: {total()}</li>
      <li className={styles.item}>
        Positive feedback: {positivePercentage()}%
      </li>
    </ul>
  </>
);

Statistics.protoTypes = {
  good: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
