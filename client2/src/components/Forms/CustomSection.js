import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import CustomSectionForm from 'customSectionForm';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

export const CustomSection = (props) =>
(<div> 
        <Form style={{width: '60%'}}>
                <Segment >
                <Grid >
                  <Grid.Row columns='equal' style={{width: '100%'}} >
                  <Grid.Column>
                  <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title'
                      onChange={props.handleChange("{formSection.field} + ' title'")}
                      name="{formSection.field} + ' title'"
                    />
                  </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                  <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description'
                      // onChange={this.props.handleChange("{formSection.field} + ' description'")}
                      // name="{formSection.field} + ' description'"
                    />
                  </Form.Field>
                  </Grid.Column>
                  </Grid.Row>
                  </Grid>
                  </Segment>
                  </Form>
</div>)

    export default CustomSection