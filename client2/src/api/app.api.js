import axios from 'axios';

export const fetchComponentData = (userID, component) => axios.get(`http://localhost:5000/api/user/${userID}/${component}`);    

// export const fetchAchievements = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/achievements`);    
// export const fetchContact = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/contact`);    
// export const fetchEducation = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/education`);    
// export const fetchExperiences = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/experiences`);    
// export const fetchProfile = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/profile`);    
// export const fetchProjects = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/projects`);    
// export const fetchPublications = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/publications`);    
// export const fetchSkills = (userID) => axios.get(`http://localhost:5000/api/user/${userID}/skills`);