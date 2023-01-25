import { useState } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hendleClickBtn = evt => {
    const name = evt.target.name;
    switch (name) {
      case 'bad':
        setBad(bad => bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'good':
        setGood(good => good + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() !== 0)
      return ` ${Math.round((good / countTotalFeedback()) * 100)} %`;
  };

  const options = ['good', 'neutral', 'bad'];
  return (
    <div>
      <Section title="Please leave feedback">
        {options.map(option => (
          <FeedbackOptions
            key={option}
            options={option}
            onLiveFeedback={hendleClickBtn}
          />
        ))}
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
