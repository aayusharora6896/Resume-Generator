import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class EducationForm extends Component {
  // saveAndContinue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    if(localStorage.getItem("education")){
      var education = localStorage.getItem("education");
      education = JSON.parse(education);
    }else{
      var education = [];
    }
    var edu = {};
    for(var element of event.target){
      if(element.name !== ''){
        edu[element.name] = element.value;
      }
    }
    education.push(edu)
    localStorage.setItem('education', JSON.stringify(education));
  }


  // back = (e) => {
  //   e.preventDefault();
  //   this.props.prevStep();
  // }
  

  render() {

    return (
        <Form onSubmit={this.handleSubmit} style={{width: '60%'}}>
          <Segment >
          <Grid >
            <Grid.Row columns='equal' style={{width: '100%'}} >
            <Grid.Column>
            <Form.Field>
              <label>School Name</label>
              <input placeholder='School Name'
                onChange={this.props.handleChange('schoolName')}
                name="schoolName"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>School City</label>
              <input placeholder='School City'
                onChange={this.props.handleChange('schoolCity')}
                name="schoolCity"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>School State</label>
              <input placeholder='School State'
                onChange={this.props.handleChange('schoolState')}
                name="schoolState"
              />
            </Form.Field>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal' style={{width: '100%'}}>
            <Grid.Column>
            <Form.Field>
              <label>Degree Name</label>
              <input placeholder='Degree Name'
                onChange={this.props.handleChange('degreeName')}
                name="degreeName"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>Domain Name</label>
              <input placeholder='Domain Name'
                onChange={this.props.handleChange('domainName')}
                name="domainName"
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
            </Grid>
          </Segment>

          <Segment textAlign='center'>
            <Button type="submit">Save And Continue</Button>
          </Segment>
        </Form>
    )
  }
}

export default EducationForm;