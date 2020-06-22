// Base
import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Container from "./components/Container";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notificaion from "./components/Notification";

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onLeaveFeedback = (e) => {
    const option = e.currentTarget.name;
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    const { neutral, bad, good } = this.state;
    let total = neutral + bad + good;
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
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notificaion message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
