import React, { Component } from 'react';
import ProjectForm from './ProjectForm';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class ProjectsForm extends Component {
    state = {
        projectFormNo: 1,
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
        const { projectFormNo } = this.state;
        this.setState({
            projectFormNo : projectFormNo + 1
        })
        console.log(this.state);
        console.log(this.state.projectFormNo);
    } 

    render(){
        var projectArray=[];
        for (var i = 0; i < this.state.projectFormNo; i++) {
            projectArray.push(<Grid.Row centered key = {i}><ProjectForm 
            nextStep={this.props.nextStep} 
            handleChange = {this.props.handleChange}
         /></Grid.Row>)         
        }
        return(
            <Grid doubling style={{ width:'100%' }}>
            <Grid.Row centered>
                <Header textAlign='center'>
                  <h1>Project</h1>
                </Header>
            </Grid.Row>    
                    {projectArray}                
                    <Segment>
                        <Button onClick={this.back}>Back</Button>
                        <Button onClick={this.addForm}>Add more Project</Button>
                        <Button onClick={this.saveAndContinue}> Continue</Button>
                    </Segment>
            </Grid>
        )
    }
}

export default ProjectsForm;