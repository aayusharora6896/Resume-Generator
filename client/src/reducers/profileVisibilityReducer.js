import { SET_PROFILE_VISIBILITY, SET_ACHIEVEMENTS_VISIBILITY,SET_COUNTER } from "../actions/profileVisibilityActions";
// import { SET_ACHIEVEMENTS_VISIBILITY } from "../actions/profileVisibilityActions";

const initialProfileState = {
    profile_vis: [true],
    counter: 1,
};

const initialAchievementsState = {
  achievements_vis: [true],
};

const profileVisibilityReducer =  (state = initialProfileState, action) => {
    switch (action.type) {
      case SET_PROFILE_VISIBILITY:
        // console.log(action.payload);
        return {
          ...state,
          profile_vis: action.payload,
        };
        case SET_COUNTER:
          console.log(action.payload);
          return {
            ...state,
            counter: action.payload,
          };
      default:
        return state;
    }
};

const achievementsVisibilityReducer =  (state = initialAchievementsState, action) => {
  switch (action.type) {
    case SET_ACHIEVEMENTS_VISIBILITY:
      return {
        ...state,
        achievements_vis: action.payload,
      };
    default:
      return state;
  }
};

export { profileVisibilityReducer, achievementsVisibilityReducer }