import React, { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ProfileVisibility from './profileVisibility';
import AchievementsVisibility from './achievementsVisibility';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const PurpleSwitch = withStyles({
    switchBase: {
      color: purple[300],
      '&$checked': {
        color: purple[500],
      },
      '&$checked + $track': {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  
  const Visibility = (props) => {
  var vis;
  if(localStorage.getItem('visibility') == null){
    vis = {
      profile: true,
      contact: true,
      education: true,
      skills: true,
      experiences: true,
      projects: true,
      publications: true,
      achievements: true,
    };
      localStorage.setItem('visibility', JSON.stringify(vis))
  }else{
    vis = JSON.parse(localStorage.getItem('visibility'));

  }

  const [visibility, setVisibility] = useState({
    profile: vis.profile,
    contact: vis.contact,
    education: vis.education,
    skills: vis.skills,
    experiences: vis.experiences,
    projects: vis.projects,
    publications: vis.publications,
    achievements: vis.achievements,
  });
  
  useEffect(() => { 
    props.sendData(visibility); 
    localStorage.setItem('visibility', JSON.stringify(visibility));
  }, [visibility]);

  const handleChange =  (event) => {
    let value = event.target.checked;
    let name = event.target.name;
     setVisibility({
      ...visibility,   // Spread Operator               
      [name]: value,
    });
  }
  
  
  return(
      <div>
        <h1>{props.profile_vis}</h1>
          <FormGroup>
          <FormControlLabel
            control={<PurpleSwitch checked={visibility.profile} onChange={handleChange} name="profile" />}
            label="Profile"
          />
          <ProfileVisibility />
        </FormGroup>
          
       <FormGroup>
          <FormControlLabel
            control={<PurpleSwitch checked={visibility.contact} onChange={handleChange} name="contact" />}
            label="Contact"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel
            control={<PurpleSwitch checked={visibility.education} onChange={handleChange} name="education" />}
            label="Education"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<PurpleSwitch checked={visibility.skills} onChange={handleChange} name="skills" />}
            label="Skills"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<PurpleSwitch checked={visibility.experiences} onChange={handleChange} name="experiences" />}
            label="Experiences"
          />
        </FormGroup>
            
        <FormGroup>
          <FormControlLabel
            control={<PurpleSwitch checked={visibility.projects} onChange={handleChange} name="projects" />}
            label="Projects"
          />
        </FormGroup>  
        <FormGroup>
          <FormControlLabel
            control={<PurpleSwitch checked={visibility.publications} onChange={handleChange} name="publications" />}
            label="Publications"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<PurpleSwitch checked={visibility.achievements} onChange={handleChange} name="achievements" />}
            label="Achievements"
          />
          <AchievementsVisibility />
        </FormGroup>
    </div>
);
}

function mapStateToProps(state) {
  return {
    profile_visibility: state.profileVisibility.profile_vis,
    achievements_visibility: state.achievementsVisibility.achievements_vis,
  };
}

export default connect(mapStateToProps)(Visibility)