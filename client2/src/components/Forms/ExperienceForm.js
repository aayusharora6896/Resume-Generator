import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class ExperienceForm extends Component {
  // saveAndContinue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    if(localStorage.getItem('experiences')){
      var experiences = localStorage.getItem('experiences');
      experiences = JSON.parse(experiences);
    }else{
      var experiences = [];
    }
    var exp = {};
    for(var element of event.target){
      if(element.name !== ''){
        exp[element.name] = element.value;
      }
    }
    experiences.push(exp)
    localStorage.setItem('experiences', JSON.stringify(experiences));
    this.props.nextStep();
  }


  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  

  render() {
    return (
        <Form onSubmit={this.handleSubmit} style={{width: '60%'}}>
          <Segment>
          <Grid >
            <Grid.Row columns='equal' style={{width: '100%'}} >
            <Grid.Column>
            <Form.Field>
              <label>Company</label>
              <input placeholder='Company'
                onChange={this.props.handleChange('company')}
                name="company"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>City</label>
              <input placeholder='City'
                onChange={this.props.handleChange('city')}
                name="city"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>State</label>
              <input placeholder='State'
                onChange={this.props.handleChange('state')}
                name="state"
              />
            </Form.Field>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal' style={{width: '100%'}} >
            <Grid.Column>
            <Form.Field>
              <label>Position</label>
              <input placeholder='Position'
                onChange={this.props.handleChange('position')}
                name="position"
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
            <Grid.Row columns='equal' style={{width: '100%'}}>
            <Grid.Column>
            <Form.Field>
              <label>Primary Work Brief</label>
              <textarea placeholder='Primary Work Brief'
                style={{height: "60px"}}
                onChange={this.props.handleChange('primaryWorkBrief')}
                name="primaryWorkBrief"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>Impact 1</label>
              <textarea placeholder='Impact 1'
                style={{height: "60px"}}
                onChange={this.props.handleChange('impact1')}
                name="impact1"
              />
            </Form.Field>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal' style={{width: '100%'}}>
            <Grid.Column>
            <Form.Field>
              <label>Impact 2</label>
              <textarea placeholder='Impact 2'
                style={{height: "60px"}}
                onChange={this.props.handleChange('impact2')}
                name="impact2"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>Impact 3</label>
              <textarea placeholder='Impact 3'
                style={{height: "60px"}}
                onChange={this.props.handleChange('impact3')}
                name="impact3"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>Impact 4</label>
              <textarea placeholder='Impact 4'
              style={{height: "60px"}}
                onChange={this.props.handleChange('impact4')}
                name="impact4"
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

export default ExperienceForm;