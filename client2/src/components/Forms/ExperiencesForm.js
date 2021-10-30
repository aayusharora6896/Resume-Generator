import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class ExperiencesForm extends Component {
    state = {
        experienceFormNo: 1,
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    

    addForm = () => {
        const { experienceFormNo } = this.state;
        this.setState({
            experienceFormNo : experienceFormNo + 1
        })
        console.log(this.state);
        console.log(this.state.experienceFormNo);
    } 

    render(){
        var experienceArray=[];
        for (var i = 0; i < this.state.experienceFormNo; i++) {
            experienceArray.push(<Grid.Row centered key = {i}><ExperienceForm 
            nextStep={this.props.nextStep} 
            handleChange = {this.props.handleChange}
         /></Grid.Row>)         
        }
        return(
            <Grid doubling style={{ width:'100%' }}>
              <Grid.Row centered>
                <Header textAlign='center'>
                  <h1>Experience</h1>
                </Header>
              </Grid.Row>    
                    {experienceArray}                
                    <Segment>
                        <Button onClick={this.back}>Back</Button>
                        <Button onClick={this.addForm}>Add more Experience</Button>
                        <Button onClick={this.saveAndContinue}> Continue</Button>
                    </Segment>
            </Grid>
        )
    }
}

export default ExperiencesForm;