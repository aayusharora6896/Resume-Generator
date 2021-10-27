import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const { v4: uuidv4 } = require('uuid');

const achievements = ({ achievements, font }) => (
  <section data-testid="Achievements" className="resume-achievements">
    <h2 style={{ fontFamily: font }}>
      Achievements
    </h2>
    <hr />
    <ul>
      {achievements.map(
        achi => achi.isVisible !== false && (
        <li key={uuidv4()}>
          <h3 style={{ fontFamily: font }}>
            {achi.title}
          </h3>
          {achi.dateFrom && (
          <h3 style={{ fontFamily: font }}>
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

achievements.defaultProps = {
  achievements: [],
};

achievements.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  achievements: state.resume.achievements,
  font: state.tools.font,
});

export default connect(mapStateToProps)(achievements);
