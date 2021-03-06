import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const { v4: uuidv4 } = require('uuid');

const Projects = ({ projects, font, fontSize, color }) => (
  <section data-testid="Projects" className="resume-projects">
    <h2 style={{ fontFamily: font, fontSize: fontSize, color: color}}>
      Projects
    </h2>
    <hr />
    <ul>
      {projects.map(
        project => project.isVisible !== false && (
        <li key={uuidv4()}>
          <h3 style={{ fontFamily: font, fontSize: fontSize }}>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.project_title}
              </a>
            ) : (
              project.project_title
            )}
          </h3>
          {project.dateFrom && (
          <h3 style={{ fontFamily: font, fontSize: fontSize }}>
            {`${project.dateFrom}${project.dateTo ? ` - ${project.dateTo}` : ''}`}
          </h3>
          )}
            {project.skills_used.map(skill => <em key={uuidv4()}>{skill} </em>)}
          <ul>
            {project.details.map(
              detail => detail && (
              <li key={uuidv4()}>
                {detail.search('http') > -1 ? (
                  <a href={detail} target="_blank" rel="noopener noreferrer">
                    {detail}
                  </a>
                ) : (
                  detail
                )}
              </li>
              ),
            )}
          </ul>
        </li>
        ),
      )}
    </ul>
  </section>
);

Projects.defaultProps = {
  projects: [],
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  projects: state.resume.projects,
  font: state.tools.font,
  fontSize: state.tools.fontSize,
  color: state.tools.color,
});

export default connect(mapStateToProps)(Projects);
