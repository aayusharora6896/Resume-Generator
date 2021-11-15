import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import linkedinIcon from '../../icons/linkedin.svg';
import mailIcon from '../../icons/mail.svg';
import phoneIcon from '../../icons/phone.svg';
import websiteIcon from '../../icons/internet.svg';
import githubIcon from '../../icons/github.svg';

import linkedinDarkIcon from '../../icons/dark/linkedin.svg';
import mailDarkIcon from '../../icons/dark/mail.svg';
import phoneDarkIcon from '../../icons/dark/phone.svg';
import websiteDarkIcon from '../../icons/dark/internet.svg';
import githubDarkIcon from '../../icons/dark/github.svg';

export const Header = ({
  profile,
  showEmail,
  showPhone,
  showGithub,
  showLinkedIn,
  showWebsite,
  showAddress,
  font,
  color,
  fontSize,
  showIcon,
}) => (
  <header className="resume-header" style={{ fontFamily: font, color: color }}>
    <h1 style={{ fontFamily: font, fontSize: fontSize, color: color }}>{profile.name}</h1>
    <ul>
      {showEmail
        && (
          <li data-testid="Email">
            <a href={`mailto:${profile.email}?subject=Interview%20Request`}>
              { showIcon ? <img src={mailIcon} className="header-icon normal-icon" alt="Mail Icon" /> : '' }
              { showIcon ? <img src={mailDarkIcon} className="header-icon dark-icon" alt="Mail Icon" /> : '' }
              {profile.email}
            </a>
          </li>
        )}
      {showPhone
        && (
          <li data-testid="Phone">
            <a href={`tel:${profile.phone}`}>
              { showIcon ? <img src={phoneIcon} className="header-icon normal-icon" alt="Phone Icon" /> : '' }
              { showIcon ? <img src={phoneDarkIcon} className="header-icon dark-icon" alt="Phone Icon" /> : '' }
              {profile.phone}
            </a>
          </li>
        )}
      {showGithub
        && (
          <li data-testid="Github">
            <a href={profile.github} target="_new">
              { showIcon ? <img src={githubIcon} className="header-icon normal-icon" alt="Github Icon" /> : '' }
              { showIcon ? <img src={githubDarkIcon} className="header-icon dark-icon" alt="Github Icon" /> : '' }
              {profile.github}
            </a>
          </li>
        )}
      {showLinkedIn
        && (
          <li data-testid="LinkedIn">
            <a href={profile.linkedin} target="_new">
              { showIcon ? <img src={linkedinIcon} className="header-icon normal-icon" alt="LinkedIn Icon" /> : '' }
              { showIcon ? <img src={linkedinDarkIcon} className="header-icon dark-icon" alt="LinkedIn Icon" /> : '' }
              {profile.linkedin}
            </a>
          </li>
        )}
      {showWebsite
        && (
          <li data-testid="Website">
            <a href={profile.website} target="_new">
              { showIcon ? <img src={websiteIcon} className="header-icon normal-icon" alt="Website Icon" /> : '' }
              { showIcon ? <img src={websiteDarkIcon} className="header-icon dark-icon" alt="Website Icon" /> : '' }
              {profile.website}
            </a>
          </li>
        )}
    </ul>
    {showAddress && (
      <ul data-testid="Address">
        <li>{profile.address}</li>
        <li>{profile.city}</li>
        <li>{profile.state}</li>
        <li>{profile.zip}</li>
        <li>{profile.country}</li>
      </ul>
    )}
  </header>
);

Header.defaultProps = {
  profile: undefined,
  showAddress: true,
  showEmail: true,
  showPhone: true,
  showGithub: true,
  showLinkedIn: true,
  showWebsite: true,
  showIcon: true,
};

Header.propTypes = {
  profile: PropTypes.shape({}),
  showEmail: PropTypes.bool,
  showPhone: PropTypes.bool,
  showGithub: PropTypes.bool,
  showLinkedIn: PropTypes.bool,
  showWebsite: PropTypes.bool,
  showAddress: PropTypes.bool,
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  showIcon: PropTypes.bool,
};

const mapStateToProps = state => ({
  profile: state.resume.profile,
  showAddress: state.tools.showAddress,
  showEmail: state.tools.showEmail,
  showPhone: state.tools.showPhone,
  showGithub: state.tools.showGithub,
  showLinkedIn: state.tools.showLinkedIn,
  showWebsite: state.tools.showWebsite,
  font: state.tools.font,
  color: state.tools.color,
  fontSize: state.tools.fontSize,
  showIcon: state.tools.showIcon,
});

export default connect(mapStateToProps)(Header);



