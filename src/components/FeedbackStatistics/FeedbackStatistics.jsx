import { Component } from 'react';
// import { countPositiveFeedbackPercentage } from '../utils/countPositiveFeedbackPercentage';
// import { countTotalFeedback } from '../utils/countTotalFeedback';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const feedbackNames = ['good', 'neutral', 'bad'];

class FeedbackStatistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  checkFeedback() {
    return Object.values(this.state).some(i => i > 0);
  }
  handleClick = value => {
    this.setState(prev => ({ [value]: prev[value] + 1 }));
  };
  countTotalFeedback(state) {
    const values = Object.values(state);
    return values.reduce((acc, value) => acc + value);
  }
  countPositiveFeedbackPercentage(total, good) {
    return total === 0 ? '0' : Math.round((good / total) * 100);
  }
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackNames}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.checkFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.countTotalFeedback(this.state),
                this.state.good
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default FeedbackStatistics;
