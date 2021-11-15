import React, { Component } from 'react';
import { Grid, Header, Segment, Button } from 'semantic-ui-react';
// import { useDispatch } from 'react-redux';
import * as api from '../../api/app.api';


const Success=() => {
  // const dispatch = useDispatch();
  const viewProfile = async () => {
    if(localStorage.getItem("profile")){
      var profileData = localStorage.getItem("profile");
      profileData = JSON.parse(profileData);
      profileData['isVisible'] = true;  //check and handle this
      const { data } = await api.createComponent('60fcc884bbed863d20b02573', 'profile', profileData);
      console.log(data);
    }
    if(localStorage.getItem("education")){
      var educationData = localStorage.getItem("education");
      educationData = JSON.parse(educationData);
      educationData['isVisible'] = true;
      for(var education of educationData){
        // console.log(education);
        const { data } = await api.createComponent('60fcc884bbed863d20b02573', 'education', education);
        console.log(data);
      }
    }
    if(localStorage.getItem("experiences")){
      var experiencesData = localStorage.getItem("experiences");
      experiencesData = JSON.parse(experiencesData);
      experiencesData['isVisible'] = true;
      for(var experience of experiencesData){
        const { data } = await api.createComponent('60fcc884bbed863d20b02573', 'experience', experience);
        console.log(data);
      }
    }
    if(localStorage.getItem("achievements")){
      var achievementsData = localStorage.getItem("achievements");
      achievementsData = JSON.parse(achievementsData);
      achievementsData['isVisible'] = true;
      for(var achievement of achievementsData){
        const { data } = await api.createComponent('60fcc884bbed863d20b02573', 'achievement', achievement);
        console.log(data);
      }
    }
    if(localStorage.getItem("projects")){
      var projectsData = localStorage.getItem("projects");
      projectsData = JSON.parse(projectsData);
      projectsData['isVisible'] = true;
      for(var project of projectsData){
        const { data } = await api.createComponent('60fcc884bbed863d20b02573', 'project', project);
        console.log(data);
      }
    }
  }
        return (
  <Grid.Column  style={{ maxWidth: 450 }}>
        <Header textAlign='center'>
          <h1>Details Successfully Saved</h1>
        </Header>
        <Segment>
          <Button onClick={viewProfile}>View Profile</Button>
        </Segment>
      </Grid.Column>
    )
  }

export default Success;