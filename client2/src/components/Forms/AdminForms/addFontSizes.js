import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';
// import colors from '../../../helpers/color.helper.js';
import * as api from '../../../api/app.api'

class AddFontSizes extends Component {
  // saveAndContinue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }
  // colors = col.colors; 
  handleSubmit = async(event) => {
    event.preventDefault();
    const fontSizesData =  {
        fontSize: event.target[0].value,
    }

    const { data } = await api.createTools('fontsizes', fontSizesData);
  }

  

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Segment>
          <Grid>
            <Grid.Row columns='equal' style={{width: '100%'}} >
            <Grid.Column>
            <Form.Field>
              <label>Font Size </label>
              <input placeholder='Font Size'
                onChange={this.props.handleChange('fontsize')}
                name="fontsize"
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

export default AddFontSizes;