import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';
import * as api from '../../api/app.api';


class AddSectionForm extends Component {
//   saveAndContinue = (e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   }

  handleSubmit = async(event) => {
    event.preventDefault();
    var section = {};
    for(var element of event.target){
      if(element.name !== ''){
        section[element.name] = element.value;
      }
    }
    console.log(section)
    const { data } = await api.createComponent('60fcc884bbed863d20b02573', 'custom_fields', section);
    console.log(data);
    // localStorage.setItem('profile', JSON.stringify(profile));
    // this.props.nextStep();
  }

  render() {
    return (
      <Grid doubling style={{ width: '100%' }}>
        <Grid.Row centered>
          <Header>
            <h1>Add Sections</h1>
          </Header>
        </Grid.Row>
        <Grid.Row centered>
        <Form onSubmit={this.handleSubmit} style={{width: '60%'}}>
          <Segment>
        <Grid centered>
        <Grid.Row columns='equal' style={{width: '100%'}} >
          <Grid.Column>
            <Form.Field>
              <label>Field Name</label>
              <input
                placeholder='Field Name'
                onChange={this.props.handleChange('field')}
                name="field"
              />
            </Form.Field>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          </Segment>


          <Segment>
            <Button type="submit">Submit</Button>
          </Segment>
        </Form>
        </Grid.Row>
        </Grid>
    );
  }
}

export default AddSectionForm;