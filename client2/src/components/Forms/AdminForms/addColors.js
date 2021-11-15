import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';
// import colors from '../../../helpers/color.helper.js';
import * as api from '../../../api/app.api'

class AddColors extends Component {
  // saveAndContinue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }
  // colors = col.colors; 
  handleSubmit = async(event) => {
    event.preventDefault();
    const colorsData =  {
      color: event.target[0].value
    }

    const { data } = await api.createTools('colors', colorsData);
  }

  

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Segment>
          <Grid>
            <Grid.Row columns='equal' style={{width: '100%'}} >
            <Grid.Column>
            <Form.Field>
              <label>Color in RGB Format </label>
              <input placeholder='RGB(256, 256, 256)'
                onChange={this.props.handleChange('color')}
                name="color"
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

export default AddColors;