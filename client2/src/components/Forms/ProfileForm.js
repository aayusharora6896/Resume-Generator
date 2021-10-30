import React, { Component } from 'react';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';

class ProfileForm extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var profile = {};
    for(var element of event.target){
      if(element.name !== ''){
        profile[element.name] = element.value;
      }
    }
    localStorage.setItem('profile', JSON.stringify(profile));
    this.props.nextStep();
  }

  render() {
    return (
      <Grid doubling style={{ width: '100%' }}>
        <Grid.Row centered>
          <Header>
            <h1>Enter User Profile Details</h1>
          </Header>
        </Grid.Row>
        <Grid.Row centered>
        <Form onSubmit={this.handleSubmit} style={{width: '60%'}}>
          <Segment>
        <Grid centered>
        <Grid.Row columns='equal' style={{width: '100%'}} >
          <Grid.Column>
            <Form.Field>
              <label>Name</label>
              <input
                placeholder='Name'
                onChange={this.props.handleChange('name')}
                name="name"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>Email Address</label>
              <input
                type='email'
                placeholder='Email Address'
                onChange={this.props.handleChange('email')}
                name = "email"
              />
            </Form.Field>
            </Grid.Column> 
            <Grid.Column> 
            <Form.Field>
              <label>Phone Number</label>
              <input
                placeholder='Phone Number'
                onChange={this.props.handleChange('phone')}
                name="phone"
              />
            </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns='equal' style={{width: '100%'}}>
            <Grid.Column>
            <Form.Field>
              <label>Github</label>
              <input
                placeholder='Github'
                onChange={this.props.handleChange('github')}
                name="github"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>Linkedin</label>
              <input
                placeholder='Linkedin'
                onChange={this.props.handleChange('linkedin')}
                name="linkedin"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>Website</label>
              <input
                placeholder='Website'
                onChange={this.props.handleChange('website')}
                name="website"
              />
            </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns='equal' style={{width: '100%'}}>
            <Grid.Column>
            <Form.Field>
              <label>Address</label>
              <input
                placeholder='Address'
                onChange={this.props.handleChange('address')}
                name="address"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>City</label>
              <input
                placeholder='City'
                onChange={this.props.handleChange('city')}
                name="city"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>State</label>
              <input
                placeholder='State'
                onChange={this.props.handleChange('state')}
                name="state"
              />
            </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns='equal' style={{width: '100%'}}>
            <Grid.Column>
            <Form.Field>
              <label>Zip</label>
              <input
                placeholder='Zip'
                onChange={this.props.handleChange('zip')}
                name="zip"
              />
            </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field>
              <label>Country</label>
              <input
                placeholder='Country'
                onChange={this.props.handleChange('country')}
                name="country"
              />
            </Form.Field>
            </Grid.Column>
            </Grid.Row>
           </Grid>
          </Segment>


          <Segment>
            <Button type="submit">Save And Continue</Button>
          </Segment>
        </Form>
        </Grid.Row>
        </Grid>
    );
  }
}

export default ProfileForm;