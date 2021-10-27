export const SET_PROFILE_VISIBILITY = "SET_PROFILE_VISIBILITY";
export const SET_COUNTER = "SET_COUNTER";
export const SET_ACHIEVEMENTS_VISIBILITY = "SET_ACHIEVEMENTS_VISIBILITY";


export const setProfileVisibilities = (profile_vis) => {
    try{
        return({
            type: SET_PROFILE_VISIBILITY,
            payload: profile_vis,
          })
    }
    catch(err){
        return({
            type: SET_PROFILE_VISIBILITY,
            payload: profile_vis,
        })
    }
};

export const setCounter = (counter) => {
    // console.log(counter);
    try{
        console.log("try");
        return({
            type: SET_COUNTER,
            payload: counter+1,
          })
    }
    catch(err){
        console.log(err);
        return({
            type: SET_COUNTER,
            payload: 0,
        })
    }
};

export const setAchievementsVisibilities = (achievements_vis) => {
    try{
        return({
            type: SET_ACHIEVEMENTS_VISIBILITY,
            payload: achievements_vis,
          })
    }
    catch(err){
        return({
            type: SET_ACHIEVEMENTS_VISIBILITY,
            payload: achievements_vis,
        })
    }
};