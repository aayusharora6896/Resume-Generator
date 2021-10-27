import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import uuid from 'uuid/v4';
import classNames from 'classnames';
import Achievements from './Achievements';
import Education from './Education';
import Experience from './Experience';
import ResumeHeader from './Header';
import Projects from './Projects';
import TechnicalSkills from './TechnicalSkills';
import { paperSizes } from '../Tools/PaperSize';
import {
  EDUCATION,
  TECH_SKILLS,
  PROJECTS,
  EXPERIENCE,
  ACHIEVEMENTS,
  defaultResumeOrder,
} from '../../helpers/resume.helper';
import '../../styles/Resume.css';
const { v4: uuidv4 } = require('uuid');

const Resume = ({
  font,
  showEducation,
  showTechSkills,
  showProjects,
  showExperience,
  showAchievements,
  order,
  paperSizeObj,
  darkMode,
}) => (
  <>
    <div className={classNames('react-resume', paperSizeObj.tag, { dark: darkMode })}>
      <div
        className="resume"
        style={{ fontFamily: font }}
      >
        <ResumeHeader />
        {order.map((item) => {
          switch (item) {
            case EDUCATION:
              return showEducation
                && <Education key={uuidv4()} />;
            case TECH_SKILLS:
              return showTechSkills
                && <TechnicalSkills key={uuidv4()} />;
            case PROJECTS:
              return showProjects
                && <Projects key={uuidv4()} />;
            case EXPERIENCE:
              return showExperience
                && <Experience key={uuidv4()} />;
            case ACHIEVEMENTS:
              return showAchievements
                && <Achievements key={uuidv4()} />;
            default:
              return <p>Error with order.</p>;
          }
        })}
      </div>
    </div>
    <p
      style={{
        color: 'red',
        textAlign: 'center',
        position: 'absolute',
        width: '100vw',
        marginTop: 5,
      }}
    >
      <span role="img" aria-label="img"> ⬆ ️</span>
      {`bottom limit of ${paperSizeObj.name} size page`}
      <span role="img" aria-label="img"> ⬆ ️</span>
    </p>
  </>
);

Resume.defaultProps = {
  font: undefined,
  showEducation: true,
  showTechSkills: true,
  showProjects: true,
  showExperience: true,
  showAchievements: true,
  order: defaultResumeOrder,
  paperSizeObj: paperSizes[0],
  darkMode: false,
};

Resume.propTypes = {
  font: PropTypes.string,
  showEducation: PropTypes.bool,
  showTechSkills: PropTypes.bool,
  showProjects: PropTypes.bool,
  showExperience: PropTypes.bool,
  showAchievements: PropTypes.bool,
  order: PropTypes.arrayOf(PropTypes.number),
  paperSizeObj: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
  }),
  darkMode: PropTypes.bool,
};

const mapStateToProps = state => ({
  showEducation: state.tools.showEducation,
  showTechSkills: state.tools.showTechSkills,
  showProjects: state.tools.showProjects,
  showExperience: state.tools.showExperience,
  showAchievements: state.tools.showAchievements,
  font: state.tools.font,
  order: state.tools.order,
  paperSizeObj: paperSizes.find(size => size.tag === state.tools.paperSize),
  resume: state.resume,
  darkMode: state.tools.darkMode,
});

export default connect(mapStateToProps)(Resume);
