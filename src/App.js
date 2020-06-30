// Base
import React, { Component } from 'react';

// Components
import Container from './components/Container';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notificaion from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const option = e.currentTarget.name;
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    this.countTotalFeedback();
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100);
  };

  countTotalFeedback = () => {
    const { neutral, bad, good } = this.state;
    return neutral + bad + good;
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
