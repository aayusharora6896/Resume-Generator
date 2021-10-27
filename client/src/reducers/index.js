import { combineReducers } from 'redux';
// import visibility from './visibility'
import profileReducer from "./profileReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import achievementsReducer from "./achievementsReducer";
import experiencesReducer from "./experiencesReducer";
import projectsReducer from "./projectsReducer";
import skillsReducer from "./skillsReducer";
import publicationsReducer from "./publicationsReducer";
import { profileVisibilityReducer } from "./profileVisibilityReducer";
import { achievementsVisibilityReducer } from "./profileVisibilityReducer";


const rootReducers = combineReducers({
    profile: profileReducer,
    contact: contactReducer,
    education: educationReducer,
    achievements: achievementsReducer,
    experiences: experiencesReducer,
    projects: projectsReducer,
    publications: publicationsReducer,
    skills: skillsReducer,
    profileVisibility: profileVisibilityReducer,
    achievementsVisibility: achievementsVisibilityReducer,
});

export default rootReducers;