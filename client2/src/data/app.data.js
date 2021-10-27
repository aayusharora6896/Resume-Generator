import * as api from '../api/app.api';

var achievementsData = [];
var contactData = [];
var educationData = [];
var experiencesData = [];
var profileData = [];
var projectsData = [];
var publicationsData = [];
var skillsData = [];
var resumeData = {};


// Get Components Data
// add user id instead of the string in both of the functions.
const getComponents = async () =>  {
    achievementsData  = await api.fetchComponentData('60fcc884bbed863d20b02573', 'achievements');
    contactData  = await api.fetchComponentData('60fcc884bbed863d20b02573', 'contact');
    educationData  = await api.fetchComponentData('60fcc884bbed863d20b02573', 'education');
    experiencesData  = await api.fetchComponentData('60fcc884bbed863d20b02573', 'experiences');
    profileData  = await api.fetchComponentData('60fcc884bbed863d20b02573', 'profile');
    projectsData  = await api.fetchComponentData('60fcc884bbed863d20b02573', 'projects');
    publicationsData  = await api.fetchComponentData('60fcc884bbed863d20b02573', 'publications');
    skillsData  = await api.fetchComponentData('60fcc884bbed863d20b02573', 'skills');
};

const getResumeData = async () => {
    await getComponents();
    return {
        achievements: achievementsData.data,
        contact: contactData.data,
        education: educationData.data,
        experiences: experiencesData.data,
        profile: profileData.data,
        projects: projectsData.data,
        publications: publicationsData.data,
        skills: skillsData.data,
    }
} 

export default getResumeData;