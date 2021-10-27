import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const { v4: uuidv4 } = require('uuid');


const Education = ({ education, font }) => (
  <section data-testid="Education" className="resume-education">
    <h2 style={{ fontFamily: font }}>Education</h2>
    <hr />
    <ul>
      {education.map(
        ed => ed.isVisible !== false && (
        <li key={uuidv4()}>
          <h3 style={{ fontFamily: font }}>{ed.school_name} {ed.school_city}, {ed.school_state}</h3>
          {ed.dateFrom &&
            <h3 style={{ fontFamily: font }}>
              {`${ed.dateFrom}${ed.dateTo ? ` - ${ed.dateTo}` : ''}`}
            </h3>}
          <em>{ed.degree_name} in {ed.domain_name}</em>
        </li>
        ),
      )}
    </ul>
  </section>
);

Education.defaultProps = {
  education: [],
};

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  education: state.resume.education,
  font: state.tools.font,
});

export default connect(mapStateToProps)(Education);
