import React, { Component } from 'react';
import KeywordForm from './KeywordForm';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class SkillsForm extends Component {
    state = {
        skillFormNo: 2,
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
        const { skillFormNo } = this.state;
        this.setState({
            skillFormNo : skillFormNo + 1
        })
        console.log(this.state);
        console.log(this.state.skillFormNo);
    } 

    render(){
        var keywordArray=[];
        for (var i = 0; i < this.state.skillFormNo; i++) {
           keywordArray.push(<Grid.Row centered key = {i}><KeywordForm 
            nextStep={this.props.nextStep} 
            handleChange = {this.props.handleChange}
         /></Grid.Row>)         
        }
        return(
            <Grid doubling style={{ width:'100%' }}>
                <Grid.Row centered>
                  <Header textAlign='center'>
                    <h1>Skills</h1>
                    <h4>Categorize your skills in 2-3 categories.</h4>
                  </Header>
                </Grid.Row>
                    {keywordArray}
                <Grid.Row>                
                  <Segment>
                    <Button onClick={this.back}>Back</Button>
                    <Button onClick={this.addForm}>Add more skills</Button>
                    <Button onClick={this.saveAndContinue}> Continue</Button>
                  </Segment>
                </Grid.Row>
            </Grid>
        )
    }
}

export default SkillsForm;