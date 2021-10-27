import * as api from '../api';
export const GET_PROFILE = "GET_PROFILE";

// Get Profile
export const getProfile = (userID) => async(dispatch) => {
      const { data } = await api.fetchProfile(userID);
      console.log(data);  
};
  