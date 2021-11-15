import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';
// import colors from '../../../helpers/color.helper.js';
import * as api from '../../../api/app.api'

class AddFonts extends Component {
  // saveAndContinue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }
  // colors = col.colors; 
  handleSubmit = async(event) => {
    event.preventDefault();
    const fontsData =  {
        font: event.target[0].value,
        name: event.target[1].value
    }

    const { data } = await api.createTools('fonts', fontsData);
  }

  

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Segment>
          <Grid>
            <Grid.Row columns='equal' style={{width: '100%'}} >
            <Grid.Column>
            <Form.Field>
              <label>Font </label>
              <input placeholder='Font'
                onChange={this.props.handleChange('font')}
                name="font"
              />
            </Form.Field>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Name'
                onChange={this.props.handleChange('name')}
                name="name"
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

export default AddFonts;