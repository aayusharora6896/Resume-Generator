import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const { v4: uuidv4 } = require('uuid');

const Experience = ({ experience, font, fontSize, color }) => (
  <section data-testid="Experience" className="resume-experience">
    <h2 style={{ fontFamily: font, fontSize: fontSize, color: color }}>
      Experience
    </h2>
    <hr />
    <ul>
      {experience.map(
        exp => exp.isVisible !== false && (
        <li key={uuidv4()}>
          {' '}
          <h3 style={{ fontFamily: font, fontSize: fontSize }}>
            {exp.position}
          </h3>
          {exp.dateFrom &&
            <h3 style={{ fontFamily: font, fontSize: fontSize }}>
              {`${exp.dateFrom}${exp.dateTo ? ` - ${exp.dateTo}` : ''}`}
            </h3>}
          <em>{`${exp.company}, ${exp.city}, ${exp.state}`}</em>
          <ul>
            <li>{exp.primaryWorkBrief}</li>
            {exp.impact1 && <li>{exp.impact1}</li>}
            {exp.impact2 && <li>{exp.impact2}</li>}
            {exp.impact3 && <li>{exp.impact3}</li>}
            {exp.impact4 && <li>{exp.impact4}</li>}
            {exp.impact5 && <li>{exp.impact5}</li>}
          </ul>
        </li>
        ),
      )}
    </ul>
  </section>
);

Experience.defaultProps = {
  experience: [],
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  experience: state.resume.experience,
  font: state.tools.font,
  color: state.tools.color,
  fontSize: state.tools.fontSize,
});

export default connect(mapStateToProps)(Experience);
