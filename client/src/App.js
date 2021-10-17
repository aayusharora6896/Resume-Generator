import React, { useState } from 'react';
import './App.css';
// import Profile from "./components/sectionsComponent/profile";
// import Contact from "./components/sectionsComponent/contact";
// import Education from "./components/sectionsComponent/education";
// import Skills from "./components/sectionsComponent/skills";
// import Experiences from "./components/sectionsComponent/experiences";
// import Projects from "./components/sectionsComponent/projects";
// import Achievements from "./components/sectionsComponent/achievements";
// import Publications from "./components/sectionsComponent/publications";
// import Visibility from "./functions/visibility";
import ProfileForm from "./components/forms/createForms/profileForm";
import AchievementsForm from "./components/forms/createForms/achievementsForm";
import ContactForm from "./components/forms/createForms/contactForm";
import EducationForm from "./components/forms/createForms/educationForm";
import ExperiencesForm from "./components/forms/createForms/experiencesForm";
import ProjectsForm from "./components/forms/createForms/projectsForm";
import SkillsForm from "./components/forms/createForms/skillsForm";
import PublicationsForm from "./components/forms/createForms/publicationsForm";
import Template1 from "./components/templates/template1";


const App = () => {
  const [visibilityData, setVisibilityData] = useState({});

  return (
    <div className="App">
      {/* <Visibility sendData={(visibility) => setVisibilityData(visibility)}/>
      {visibilityData.profile?<Profile />:null}      
      {visibilityData.contact?<Contact />:null}      
      {visibilityData.education?<Education />:null}  
      {visibilityData.skills?<Skills />:null}      
      {visibilityData.experiences?<Experiences />:null}      
      {visibilityData.projects?<Projects />:null}      
      {visibilityData.achievements?<Achievements />:null}      
      {visibilityData.publications?<Publications />:null}       */}
      <Template1 />
      <ProfileForm id="myTextArea"/>
      <ContactForm id="myTextArea"/>
      <EducationForm id="myTextArea"/>
      <SkillsForm id="myTextArea"/>
      <ExperiencesForm id="myTextArea"/>
      <ProjectsForm id="myTextArea"/>
      <AchievementsForm id="myTextArea"/>
      <PublicationsForm id="myTextArea"/>
      {/* <UpdateProfileForm /> */}
    </div>
  );
}

export default App;
