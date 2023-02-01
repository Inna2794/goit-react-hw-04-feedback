import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback:
        {positivePercentage}
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.string,
    neutral: PropTypes.string,
    bad: PropTypes.string,
    total: PropTypes.string,
    positivePercentage: PropTypes.string,
  }),
};
