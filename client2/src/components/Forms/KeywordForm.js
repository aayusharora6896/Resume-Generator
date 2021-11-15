import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class KeywordForm extends Component {
  // saveAndContinue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    if(localStorage.getItem('skills')){
      var skills = localStorage.getItem('skills');
      skills = JSON.parse(skills);
    }else{
      var skills = [];
    }
    var skill = {};
    for(var element of event.target){
      if(element.name !== ''){
        skill[element.name] = element.value;
      }
    }
    skills.push(skill)
    localStorage.setItem('skills', JSON.stringify(skills));
  }


  // back = (e) => {
  //   e.preventDefault();
  //   this.props.prevStep();
  // }
    

  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{width: '60%'}}>
      <Segment>
      <Grid >
        <Grid.Row columns='equal' style={{width: '100%'}} >
          <Grid.Column>
            <Form.Field >
              <label>Name</label>
              <input placeholder='Name'
                onChange={this.props.handleChange('name')}
                name="name"
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column>
            <Form.Field>
              <label>Level</label>
              <input placeholder='Level'
                onChange={this.props.handleChange('level')}
                name="level"
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column>
            <Form.Field>
              <label>Category</label>
              <input placeholder='Category'
                onChange={this.props.handleChange('category')}
                name="category"
              />
            </Form.Field>
          </Grid.Column>
          </Grid.Row>
        <Grid.Row columns='equal' style={{width: '100%'}} >
          <Grid.Column centered verticalAlign='bottom'>
           <Button type="submit">Save Skill</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Segment>
      </Form>
    )
  }
}

export default KeywordForm;