import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Stars from './Stars';
const { v4: uuidv4 } = require('uuid');
const defaultLevel = 4;

const retString = kw => (typeof kw === 'string' ? kw : kw.name);
const retObject = kw => (typeof kw === 'string' ? { name: kw, level: defaultLevel } : kw);

const TechnicalSkills = ({ techSkills, showSkillLevel, font, fontSize, color }) => (
  <section data-testid="TechSkills" className="resume-tech-skills">
    <h2 style={{ fontFamily: font, fontSize: fontSize, color: color }}>
      Skills
    </h2>
    <hr />
    <div className="grid-container">
      {techSkills.map(
        (skill, index) => skill.isVisible !== false && (
            <div key={uuidv4()} className="grid-column" style={{ flexBasis: skill.columnWidthPercent || undefined}}>
              <h3 style={{ fontFamily: font, fontSize: fontSize }}>
                {skill.category}
              </h3>
              {showSkillLevel
                ? skill.keywords.map(kw => (
                  <div className="tech-skills-keyword" key={uuidv4()}>
                    <div className="keyword-name">{retObject(kw).name}</div>
                    <Stars lev={retObject(kw).level} />
                  </div>
                ))
                : skill.keywords.map((kw, skillIndex) => (skillIndex === skill.keywords.length - 1 ? retString(kw) : `${retString(kw)}, `))}
            </div>)
      )}
    </div>
  </section>
);

TechnicalSkills.defaultProps = {
  techSkills: [],
  showSkillLevel: false,
};

TechnicalSkills.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.shape({})),
  showSkillLevel: PropTypes.bool,
  font: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  techSkills: state.resume.technicalSkills,
  showSkillLevel: state.tools.showSkillLevel,
  font: state.tools.font,
  fontSize: state.tools.fontSize,
  color: state.tools.color,
});

export default connect(mapStateToProps)(TechnicalSkills);
