import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class AchievementForm extends Component {
  // saveAndContinue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    if(localStorage.getItem('achievements')){
      var achievements = localStorage.getItem('achievements');
      achievements = JSON.parse(achievements);
    }else{
      var achievements = [];
    }
    var ach = {};
    for(var element of event.target){
      if(element.name !== ''){
        ach[element.name] = element.value;
      }
    }
    achievements.push(ach)
    localStorage.setItem('achievements', JSON.stringify(achievements));
    this.props.nextStep();
  }


  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Segment>
          <Grid>
            <Grid.Row columns='equal' style={{width: '100%'}} >
            <Grid.Column>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Title'
                onChange={this.props.handleChange('title')}
                name="title"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>Start Date</label>
              <input placeholder='Start Date'
                onChange={this.props.handleChange('dateFrom')}
                name="dateFrom"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>End Date</label>
              <input placeholder='End Date'
                onChange={this.props.handleChange('dateTo')}
                name="dateTo"
              />
            </Form.Field>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal' style={{width: '100%'}} >
            <Grid.Column>
            <Form.Field>
              <label>Description</label>
              <textarea placeholder='Description'
                onChange={this.props.handleChange('description')}
                style={{height: '100px'}}
                name="description"
              />
            </Form.Field>
            </Grid.Column>
            </Grid.Row>
            </Grid>
          </Segment>

          <Segment textAlign='center'>
            <Button type="submit">Save And Continue</Button>
          </Segment>
        </Form>
      )
  }
}

export default AchievementForm;