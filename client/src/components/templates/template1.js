import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Profile from "../sectionsComponent/profile";
import Contact from "../sectionsComponent/contact";
import Education from "../sectionsComponent/education";
import Skills from "../sectionsComponent/skills";
import Experiences from "../sectionsComponent/experiences";
import Projects from "../sectionsComponent/projects";
import Achievements from "../sectionsComponent/achievements";
import Publications from "../sectionsComponent/publications";
import Visibility from "../../functions/visibility";
import "./template1.css";

function Template1() {
    const [visibilityData, setVisibilityData] = useState({});
    return (
        <div>
            <Grid container >
               <Grid item xs={4}> 
                <Visibility sendData={(visibility) => setVisibilityData(visibility)} />
               </Grid>
               <Grid item xs={8}>  
                <div id = "resumeTemplate1">
                 {visibilityData.profile?<Profile />:null}      
                 {visibilityData.contact?<Contact />:null}      
                 {visibilityData.education?<Education />:null}  
                 {visibilityData.skills?<Skills />:null}      
                 {visibilityData.experiences?<Experiences />:null}      
                 {visibilityData.projects?<Projects />:null}      
                 {visibilityData.achievements?<Achievements />:null}      
                 {visibilityData.publications?<Publications />:null}
                </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Template1
