import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const { v4: uuidv4 } = require('uuid');

const Achievements = ({ achievements, font, fontSize, color }) => (
  <section data-testid="Achievements" className="resume-achievements">
    <h2 style={{ fontFamily: font, fontSize: fontSize, color: color }}>
      Achievements
    </h2>
    <hr />
    <ul>
      {achievements.map(
        achi => achi.isVisible !== false && (
        <li key={uuidv4()}>
          <h3 style={{ fontFamily: font, fontSize: fontSize }}>
            {achi.title}
          </h3>
          {achi.dateFrom && (
          <h3 style={{ fontFamily: font, fontSize: fontSize }}>
            {`${achi.dateFrom}${achi.dateTo ? ` - ${achi.dateTo}` : ''}`}
          </h3>
          )}
          <p>{achi.description}</p>
        </li>
        ),
      )}
    </ul>
  </section>
);

Achievements.defaultProps = {
  achievements: [],
};

Achievements.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  achievements: state.resume.achievements,
  font: state.tools.font,
  color: state.tools.color,
  fontSize: state.tools.fontSize,
});

export default connect(mapStateToProps)(Achievements);
