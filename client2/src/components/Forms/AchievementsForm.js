import React, { Component } from 'react';
import AchievementForm from './AchievementForm';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class AchievementsForm extends Component {
    state = {
        achievementFormNo: 1,
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
        const { achievementFormNo } = this.state;
        this.setState({
            achievementFormNo : achievementFormNo + 1
        })
        console.log(this.state);
        console.log(this.state.achievementFormNo);
    } 

    render(){
        var achievementArray=[];
        for (var i = 0; i < this.state.achievementFormNo; i++) {
            achievementArray.push(<Grid.Row centered key = {i}><AchievementForm 
            nextStep={this.props.nextStep} 
            handleChange = {this.props.handleChange}
         /></Grid.Row>)         
        }
        return(
            <Grid doubling style={{ width:'100%' }}>
            <Grid.Row centered>
                <Header textAlign='center'>
                  <h1>Achievement</h1>
                </Header>
            </Grid.Row>    
                    {achievementArray}                
                    <Segment>
                        <Button onClick={this.back}>Back</Button>
                        <Button onClick={this.addForm}>Add more Achievement</Button>
                        <Button onClick={this.saveAndContinue}> Continue</Button>
                    </Segment>
            </Grid>
        )
    }
}

export default AchievementsForm;