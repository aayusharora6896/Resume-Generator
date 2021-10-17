import React, { useState } from 'react';
import Profile from "../sectionsComponent/profile";
import Contact from "../sectionsComponent/contact";
import Education from "../sectionsComponent/education";
import Skills from "../sectionsComponent/skills";
import Experiences from "../sectionsComponent/experiences";
import Projects from "../sectionsComponent/projects";
import Achievements from "../sectionsComponent/achievements";
import Publications from "../sectionsComponent/publications";
import Visibility from "../../functions/visibility";

function Template1() {
    const [visibilityData, setVisibilityData] = useState({});
    return (
        <div>
            <Visibility sendData={(visibility) => setVisibilityData(visibility)}/>
            {visibilityData.profile?<Profile />:null}      
            {visibilityData.contact?<Contact />:null}      
            {visibilityData.education?<Education />:null}  
            {visibilityData.skills?<Skills />:null}      
            {visibilityData.experiences?<Experiences />:null}      
            {visibilityData.projects?<Projects />:null}      
            {visibilityData.achievements?<Achievements />:null}      
            {visibilityData.publications?<Publications />:null}
        </div>
    )
}

export default Template1
