import { WidgetSection, Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <WidgetSection>
      <Title>{title}</Title>
      {children}
    </WidgetSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
