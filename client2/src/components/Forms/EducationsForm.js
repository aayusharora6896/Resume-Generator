import React, { Component } from 'react';
import EducationForm from './EducationForm';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class EducationsForm extends Component {
    state = {
        educationFormNo: 1,
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
        const { educationFormNo } = this.state;
        this.setState({
            educationFormNo : educationFormNo + 1
        })
        console.log(this.state);
        console.log(this.state.educationFormNo);
    } 

    render(){
        var educationArray=[];
        for (var i = 0; i < this.state.educationFormNo; i++) {
           educationArray.push(<Grid.Row centered key = {i}><EducationForm 
            nextStep={this.props.nextStep}  
            handleChange = {this.props.handleChange}
         /></Grid.Row>)         
        }
        return(
            <Grid doubling style={{ width:'100%' }}>
                <Grid.Row centered>
                <Header textAlign='center'>
                  <h1>Education</h1>
                </Header>
                </Grid.Row>
                    {educationArray}                
                    <Segment>
                        <Button onClick={this.back}>Back</Button>
                        <Button onClick={this.addForm}>Add more Education</Button>
                        <Button onClick={this.saveAndContinue}> Continue</Button>
                    </Segment>
            </Grid>
        )
    }
}

export default EducationsForm;