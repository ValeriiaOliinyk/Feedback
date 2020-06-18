// Base
import React, { Component } from "react";

// Components
import FeedBack from "./components/FeedBack";

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handelIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
  };

  handelIncrementNeutural = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
  };

  handelIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    let total = this.state.neutral + this.state.bad + this.state.good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    const total = this.countTotalFeedback();
    if (positiveFeedback) {
      return Math.round((positiveFeedback / total) * 100);
    }

    if (!positiveFeedback) {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedBack
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        onGood={this.handelIncrementGood}
        onNeutural={this.handelIncrementNeutural}
        onBad={this.handelIncrementBad}
      />
    );
  }
}

export default App;
