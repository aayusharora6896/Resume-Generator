import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class ProjectForm extends Component {
  // saveAndContinue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    if(localStorage.getItem('projects')){
      var projects = localStorage.getItem('projects');
      projects = JSON.parse(projects);
    }else{
      var projects = [];
    }
    var pro = {};
    for(var element of event.target){
      if(element.name !== ''){
        pro[element.name] = element.value;
      }
    }
    projects.push(pro)
    localStorage.setItem('projects', JSON.stringify(projects));
  }
  

  render() {
    return (
        <Form onSubmit={this.handleSubmit} style={{width: '60%'}}>
          <Segment>
          <Grid>
            <Grid.Row columns='equal' style={{width: '100%'}} >
            <Grid.Column>
            <Form.Field>
              <label>Project Title</label>
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
            <Grid.Column>
            <Form.Field>
              <label>Project Link</label>
              <input placeholder='Link'
                onChange={this.props.handleChange('link')}
                name="link"
              />
            </Form.Field>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal' style={{width: '100%'}}>
            <Grid.Column>
            <Form.Field>
              <label>Skills Used</label>
              <input placeholder='Skill1, Skill2, Skill3'
                onChange={this.props.handleChange('state')}
                name="state"
              />
            </Form.Field>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal' style={{width: '100%'}}>
            <Grid.Column>
            <Form.Field>
              <label>Details</label>
              <input placeholder='Detail1, Detail2, Detail3'
                onChange={this.props.handleChange('details')}
                name="details"
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

export default ProjectForm;