import React, { Component } from 'react';
import ProfileForm from './ProfileForm';
import EducationsForm from './EducationsForm';
import AchievementsForm from './AchievementsForm';
import ExperiencesForm from './ExperiencesForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
    state = {
      step: 1,
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step : step + 1
        })
      }
    
      prevStep = () => {
        const { step } = this.state
        this.setState({
          step : step - 1
        })
      }
    
      handleChange = input => event => {
        this.setState({[input]: event.target.value})
      }

      render() {
        const { step } = this.state;    
        switch(step) {
          case 1:
            return <ProfileForm
                      nextStep={this.nextStep} 
                      handleChange = {this.handleChange}
                   />
          case 2:
            return <EducationsForm
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange = {this.handleChange}
                   />
          case 3:
            return <ExperiencesForm
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange = {this.handleChange}
                    />         
          case 4:
            return <SkillsForm
                      nextStep={this.nextStep}
                      prevStep={this.prevStep} 
                      handleChange = {this.handleChange}
                    />         
          case 5:
            return <ProjectsForm
                      nextStep={this.nextStep}
                      prevStep={this.prevStep} 
                      handleChange = {this.handleChange}
                    />         
          case 6:
            return <AchievementsForm
                      nextStep={this.nextStep}
                      prevStep={this.prevStep} 
                      handleChange = {this.handleChange}
                    />         
          // case 6:
          //   return <Confirmation
          //             nextStep={this.nextStep}
          //             prevStep={this.prevStep}
          //          />
          case 7:
            return <Success />
        }
      }
    
  }
  
  export default MainForm;